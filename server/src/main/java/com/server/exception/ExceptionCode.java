package com.server.exception;

import lombok.Getter;

public enum
ExceptionCode {
    MEMBER_NOT_FOUND(404, "찾는 멤버가 없습니다."),
    MEMBER_EMAIL_EXISTS(409, "이메일이 중복됩니다."),
    QUESTION_EXIST(409, "작성된 질문, 게시글이 있습니다."),
    QUESTION_NOT_FOUND(404, "게시글이 존재하지 않습니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
