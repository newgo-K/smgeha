package com.smgeha.domain.auth;

import com.smgeha.web.dto.auth.Role;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Getter
@Setter
public class AuthDTO implements UserDetails {
    private Long id;
    private String password;
    private String userId;
    private int role;

    @Override
    public Collection <? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collectors = new ArrayList<>();
        if (this.role == 1) {
            collectors.add(() -> {
                return Role.ADMIN.getValue();
            });
        }
        else if (this.role == 2) {
            collectors.add(() -> {
                return Role.SUB_ADMIN.getValue();
            });
        }
        else {
            collectors.add(() -> {
                return Role.MEMBER.getValue();
            });
        }
        return collectors;
    }

    @Override
    public String getUsername() {
        return this.userId;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
}
