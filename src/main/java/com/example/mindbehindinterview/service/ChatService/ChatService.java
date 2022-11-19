package com.example.mindbehindinterview.service.ChatService;

import com.example.mindbehindinterview.api.request.SendMessageRequest;
import com.example.mindbehindinterview.domain.Chat;

import java.util.List;

public interface ChatService {
    List<Chat> readMessages();

    void saveMessage(SendMessageRequest sendMessageRequest);

    List<Chat> readRecentMessages();
}
