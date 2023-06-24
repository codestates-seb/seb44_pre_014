package com.server.answer.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @Min(1)
        private long memberId;

        @Min(1)
        private long questionId;

        @NotBlank
        private String content;
    }

    @Getter
    public static class Patch {
        private String content;

        private Boolean choose;
    }
}
