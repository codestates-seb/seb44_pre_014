package com.server.exception;

import lombok.Getter;

public enum
ExceptionCode {
    MEMBER_NOT_FOUND(404, "찾는 멤버가 없습니다."),
    MEMBER_EMAIL_EXISTS(409, "이메일이 중복됩니다."),
    INVALID_MEMBER(409, "email 또는 password 가 일치하지 않습니다"),
    POST_EXIST(409, "연결된 질문, 게시글 또는 댓글을 먼저 삭제해주세요.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
