package com.example.mindbehindinterview.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum SenderType {
    BOT("BOT"),
    USER("USER");

    private String value;


}
