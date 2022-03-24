package com.smgeha.service.auth;

import com.smgeha.domain.auth.AuthDTO;
import com.smgeha.domain.auth.AuthResDTO;
import com.smgeha.domain.auth.PrincipalDetails;
import com.smgeha.mapper.auth.AuthMapper;
import com.smgeha.web.util.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@Service
public class AuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AuthMapper authMapper;

    public AuthResDTO login(AuthDTO request) throws Exception {
        AuthDTO auth = authMapper.getAuthInfo(request.getUserId());

        if(auth == null) {
            return null;
        }
        if(!passwordEncoder.matches(request.getPassword(), auth.getPassword())) {
            return null;
        }

        AuthResDTO data = new AuthResDTO();

        data.setRole(auth.getRole());
        data.setToken(jwtTokenProvider.createToken(auth.getUserId(), auth.getRole()));

        return data;
    }

    public boolean loginCheck(HttpServletRequest request) throws Exception {
        return jwtTokenProvider.validateToken(jwtTokenProvider.resolveToken(request));
    }

    public void signup(AuthDTO request) {
        String password = passwordEncoder.encode(request.getPassword());
    }
}
