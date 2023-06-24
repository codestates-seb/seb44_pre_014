package com.server.question.dto;

import java.util.Set;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import lombok.Getter;

public class QuestionDto {
    @Getter
    public static class Post {
        @Min(1)
        private long memberId;

        @NotBlank
        private String title;

        @NotBlank
        private String content;

        private Set<String> tagNames;
    }

    @Getter
    public static class Patch {
        private String title;

        private String content;

        private Boolean solve;
    }
}
