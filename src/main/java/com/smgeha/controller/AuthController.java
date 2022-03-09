package com.smgeha.controller;


import com.smgeha.domain.auth.AuthDTO;
import com.smgeha.service.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping(value = "login")
    public String login(@RequestBody AuthDTO request) throws Exception {
        return authService.login(request);
    }

    @PostMapping(value = "signup")
    public void signup(@RequestBody AuthDTO request) {
        authService.signup(request);
    }
}
