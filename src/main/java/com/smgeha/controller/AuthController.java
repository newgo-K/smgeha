package com.smgeha.controller;


import com.smgeha.domain.auth.AuthDTO;
import com.smgeha.domain.auth.AuthResDTO;
import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.service.auth.AuthService;
import com.smgeha.web.util.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping(value = "login")
    public AuthResDTO login(@RequestBody AuthDTO request) throws Exception {
        return authService.login(request);
    }

    @PostMapping(value = "signup")
    public void signup(@RequestBody AuthDTO request) {
        authService.signup(request);
    }

    @GetMapping(value = "/loginCheck")
    public boolean loginCheck(HttpServletRequest request) throws Exception {
        return authService.loginCheck(request);
    }
}
