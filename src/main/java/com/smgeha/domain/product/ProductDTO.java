package com.smgeha.domain.product;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class ProductDTO {
    private Long id;
    private String name;
    private String serial;
    private String image;
    private String size;
    private String manufacture;
    private Integer price;
    private String url;
    private String subTypes;
    private List<String> subImages;
}
