package com.example.mindbehindinterview.api.resource;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecentMessagesResource {

    private String messages;

    private String key;

}
