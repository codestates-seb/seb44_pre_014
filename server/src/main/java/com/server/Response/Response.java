package com.server.response;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {
    // PK
    private Long memberId;
    private Long questionId;
    private Long answerId;
    private Long commentId;

    // FK
    // private Member member;
    // private Question question;

    // [] <-> FK
    private List<Response> questions;
    private List<Response> answers;
    private List<Response> comments;

    // Column
    private String email;
    private String username;
    private String writer;
    private String title;
    private String content;
    private Long view;
    private Boolean solve;
    private Boolean choose;
    private Integer voteQuantity;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private List<String> tagNames;
}
