package com.smgeha.domain.product;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@Data
public class Product {
    private Long id;
    private String title;
    private String serial;
    private String manufactureText;
    private String type;
    private String sizeText;
    private String url;
    private List<String> imgs;
}
