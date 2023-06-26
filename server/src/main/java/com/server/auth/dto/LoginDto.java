package com.server.auth.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class LoginDto {
    private String email;
    private String password;
}