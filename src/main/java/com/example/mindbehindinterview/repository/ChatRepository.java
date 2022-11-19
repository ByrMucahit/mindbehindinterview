package com.example.mindbehindinterview.repository;

import com.example.mindbehindinterview.domain.Chat;
import com.example.mindbehindinterview.domain.SenderType;
import org.hibernate.usertype.UserType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ChatRepository extends PagingAndSortingRepository<Chat, Long> {

    boolean existsByMessage(String message);


    List<Chat> findTop5BySenderOrderByCreatedAtDesc(SenderType senderType);


    List<Chat> findAllBy();
}
