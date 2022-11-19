package com.example.mindbehindinterview.api.resource;

import com.example.mindbehindinterview.domain.SenderType;
import lombok.Builder;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.Date;

@Data
@Builder
public class ChatResource {

    private String message;

    @Enumerated(EnumType.STRING)
    private SenderType senderType;

    private Date date;
}
