package com.example.mindbehindinterview.domain;

import com.example.mindbehindinterview.api.resource.ChatResource;
import com.example.mindbehindinterview.api.resource.RecentMessagesResource;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Data
@Entity
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(strategy = "native", name = "native")
    private long id;

    private String message;

    @Enumerated(EnumType.STRING)
    private SenderType sender;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    public List<ChatResource> toDTO(List<Chat> chatList) {

        return chatList.stream().map(chat -> ChatResource.builder().senderType(chat.sender).message(chat.getMessage()).date(chat.getCreatedAt()).build()).collect(Collectors.toList());
    }

    public List<RecentMessagesResource> toDto(List<Chat> chatList) {
        return chatList.stream().map(item -> RecentMessagesResource.builder().messages(item.message).key(UUID.randomUUID().toString()).build()).collect(Collectors.toList());
    }

}
