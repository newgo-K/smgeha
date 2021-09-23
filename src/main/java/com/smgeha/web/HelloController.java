package com.smgeha.web;

import com.smgeha.web.dto.HelloResponseDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// JSON 반환 가능하게 만듦
@RestController
public class HelloController {
    // HTTP Method인 GET 요청 받아드림
    @GetMapping("/hello")
    public String hello() {
        return "hello123";
    }

    @GetMapping("/hello/dto")
    public HelloResponseDto helloDto(@RequestParam("name") String name, @RequestParam("amount") int amount) {
        return new HelloResponseDto(name, amount);
    }
}

