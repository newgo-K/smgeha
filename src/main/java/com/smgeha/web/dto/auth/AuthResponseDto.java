package com.smgeha.web.dto.auth;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthResponseDto {
    private Long id;
    private String userId;
    private String role;
}
