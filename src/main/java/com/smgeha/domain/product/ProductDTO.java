package com.smgeha.domain.product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
    private Long id;
    private String name;
    private String serial;
    private String image;
    private String size;
    private String manufacture;
    private String url;
}
