package com.smgeha.service.auth;

import com.smgeha.domain.auth.AuthDTO;
import com.smgeha.mapper.auth.AuthMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;


@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {
    @Autowired
    private AuthMapper authMapper;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        AuthDTO auth1 = authMapper.getAuthInfo(userId);

        if(auth1 == null) {
            return null;
        }


        AuthDTO auth = new AuthDTO();

        auth.setUserId(auth1.getUserId());
        auth.setPassword(auth1.getPassword());

        return auth;//반환할 타입이 Member와 맞지 않는다.
    }
}
