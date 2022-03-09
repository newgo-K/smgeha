package com.smgeha.web.dto.auth;

import lombok.Getter;

@Getter
public class AuthRequestDto {
    private Long id;
    private String userId;
    private String password;
}
