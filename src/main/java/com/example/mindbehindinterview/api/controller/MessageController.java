package com.example.mindbehindinterview.api.controller;

import com.example.mindbehindinterview.api.request.SendMessageRequest;
import com.example.mindbehindinterview.api.resource.ChatResource;
import com.example.mindbehindinterview.api.resource.RecentMessagesResource;
import com.example.mindbehindinterview.domain.Chat;
import com.example.mindbehindinterview.service.ChatService.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    private final ChatService chatService;

    @GetMapping
    public List<ChatResource> getMessages() {
        Chat chat = new Chat();
        return chat.toDTO(chatService.readMessages());
    }

    @GetMapping("/recent-messages")
    public List<RecentMessagesResource> getRecentMessages() {
        Chat chat = new Chat();
        return chat.builder(chatService.readRecentMessages());
    }

    @PostMapping(value = "/save", consumes = MediaType.ALL_VALUE, produces = {MediaType.ALL_VALUE, "application/json"})
    public void saveMessage(@ModelAttribute SendMessageRequest sendMessageRequest) {
        log.debug("The Transaction to save message has been just started ...");
        chatService.saveMessage(sendMessageRequest);
    }
}
