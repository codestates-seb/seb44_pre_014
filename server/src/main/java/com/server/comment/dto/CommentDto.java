package com.server.comment.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

public class CommentDto {
    @Getter
    @Setter
    public static class Post {
        @Min(1)
        private Long memberId;

        private Long questionId;
        private Long answerId;

        @NotBlank
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {
        @NotBlank
        private String content;
    }
}
