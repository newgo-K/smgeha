package com.smgeha.mapper.auth;

import com.smgeha.domain.auth.AuthDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AuthMapper {
    public AuthDTO getAuthInfo(String userId);
}
