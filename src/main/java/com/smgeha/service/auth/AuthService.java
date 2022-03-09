package com.smgeha.service.auth;

import com.smgeha.domain.auth.AuthDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String login(AuthDTO request) throws Exception {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();
        return "sfsd";//principal.getUsername();
    }

    public void signup(AuthDTO request) {
        String password = passwordEncoder.encode(request.getPassword());
        String a = "sdfa";
    }
}
