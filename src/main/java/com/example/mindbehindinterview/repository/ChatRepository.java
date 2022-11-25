package com.example.mindbehindinterview.repository;

import com.example.mindbehindinterview.domain.Chat;
import com.example.mindbehindinterview.domain.SenderType;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ChatRepository extends PagingAndSortingRepository<Chat, Long> {

    List<Chat> findTop5BySenderOrderByCreatedAtDesc(SenderType senderType);


    List<Chat> findAllBy();
}
