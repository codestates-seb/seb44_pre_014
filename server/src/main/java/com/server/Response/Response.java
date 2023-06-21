package com.server.Response;

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
    private String writer;
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

    // column
    private String email;
    private String username;
    private String name;
    private String title;
    private String content;
    private Boolean solve;
    private Boolean choose;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
