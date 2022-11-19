package com.example.mindbehindinterview.service.ChatService.impl;

import com.example.mindbehindinterview.api.request.SendMessageRequest;
import com.example.mindbehindinterview.domain.Chat;
import com.example.mindbehindinterview.domain.SenderType;
import com.example.mindbehindinterview.repository.ChatRepository;
import com.example.mindbehindinterview.service.ChatService.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.usertype.UserType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChatServiceImpl implements ChatService {

    private final ChatRepository chatRepository;

    private Chat prepareCommonChat(String message) {
        Chat chat = new Chat();
        chat.setMessage(message);

        return chat;
    }

    private Chat prepareUserChat(String message) {
        Chat chat = prepareCommonChat(message);
        chat.setSender(SenderType.USER);
        return chat;
    }

    private Chat prepareBotChat(String message) {
        Chat chat = prepareCommonChat(message);
        chat.setSender(SenderType.BOT);
        return chat;
    }

    @Override
    public List<Chat> readMessages() {

        return chatRepository.findAllBy();
    }

    @Override
    public void saveMessage(SendMessageRequest sendMessageRequest) {

        chatRepository.save(this.prepareUserChat(sendMessageRequest.getMessage()));
        chatRepository.save(this.prepareBotChat(sendMessageRequest.getMessage()));

    }

    @Override
    public List<Chat> readRecentMessages() {
        return chatRepository.findTop5BySenderOrderByCreatedAtDesc(SenderType.USER);
    }
}
