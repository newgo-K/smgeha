package com.smgeha.web.dto.product;

import lombok.Getter;

import java.util.List;

@Getter
public class productResponseDto {
    private Long id;
    private String title;
    private String serial;
    private String manufactureText;
    private String type;
    private String sizeText;
    private String url;
    private List<String> imgList;
}
