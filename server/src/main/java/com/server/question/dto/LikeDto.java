package com.server.question.dto;

import javax.validation.constraints.NotBlank;

import lombok.Getter;

public class LikeDto {
    @Getter
    public static class Post {
        @NotBlank
        private Long memberId;
        @NotBlank
        private Integer value;
    }
}
