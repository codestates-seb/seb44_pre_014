package com.server.vote.dto;

import javax.validation.constraints.NotBlank;

import lombok.Getter;

public class VoteDto {
    @Getter
    public static class Post {
        @NotBlank
        private Long questionId;

        @NotBlank
        private Integer upDown;
    }
}
