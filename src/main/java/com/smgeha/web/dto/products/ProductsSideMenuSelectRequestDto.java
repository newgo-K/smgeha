package com.smgeha.web.dto.products;

import lombok.Getter;

import java.util.List;

@Getter
public class ProductsSideMenuSelectRequestDto {
    private short id;
    private short[][] sideMenus;
}
