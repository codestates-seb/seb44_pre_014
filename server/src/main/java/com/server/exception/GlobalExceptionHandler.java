package com.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler
    public ResponseEntity test(BusinessLogicException e) {
        HttpStatus status = HttpStatus.valueOf(e.getExceptionCode().getStatus());

        return new ResponseEntity<>(e.getMessage(), status);
    }

    @ExceptionHandler
    public ResponseEntity test(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
