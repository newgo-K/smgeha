package com.smgeha.web.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

// get 메소드 생성
@Getter
// 모든 final 핃드만 생성자 생성
@RequiredArgsConstructor
public class HelloResponseDto {
    private final String name;
    private final int amount;
}
