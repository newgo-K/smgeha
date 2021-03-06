package com.smgeha.domain.auth;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthDTO{
    private Long id;
    private String password;
    private String userId;
    private String role;
    private String token;
}
