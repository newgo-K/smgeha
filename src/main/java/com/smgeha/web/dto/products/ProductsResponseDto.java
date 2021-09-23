package com.smgeha.web.dto.products;

import com.smgeha.domain.products.Products;
import lombok.Getter;

@Getter
public class ProductsResponseDto {
    private Long id;
    private String title;
    private String num;
    private String make;
    private String liter;
    private String door;
    private String design;

    public ProductsResponseDto(Products entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.num = entity.getNum();
        this.make = entity.getMake();
        this.liter = entity.getLiter();
        this.door = entity.getDoor();
        this.design = entity.getDesign();
    }
}
