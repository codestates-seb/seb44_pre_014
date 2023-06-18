package com.server.exception;

import lombok.Getter;

public enum
ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EMAIL_EXISTS(409, "email exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
