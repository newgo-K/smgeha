package com.smgeha.web.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Role {
    ADMIN("ROLE_ADMIN"),
    SUB_ADMIN("ROLE_SUB_ADMIN"),
    USER("ROLE_USER");

    private String value;
}