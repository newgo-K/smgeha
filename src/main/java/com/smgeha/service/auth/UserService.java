package com.smgeha.service.auth;

import com.smgeha.domain.auth.AuthDTO;
import com.smgeha.domain.auth.PrincipalDetails;
import com.smgeha.domain.product.ProductDTO;
import com.smgeha.mapper.auth.AuthMapper;
import com.smgeha.web.util.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
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
        AuthDTO auth = authMapper.getAuthInfo(userId);

        if(auth == null) {
            return null;
        }

        return new PrincipalDetails(auth);
    }

    public String getRole() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String role = "";
        if(authentication.getPrincipal() != "anonymousUser") {
            PrincipalDetails user = (PrincipalDetails) authentication.getPrincipal();
            role = user.getAuth().getRole();
        }
        ProductDTO product = new ProductDTO();

        return role;
    }
}
