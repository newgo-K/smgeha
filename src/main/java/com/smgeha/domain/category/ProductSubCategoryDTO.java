package com.smgeha.domain.category;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductSubCategoryDTO {
    private Integer code;
    private String name;
    private Integer parent;
    private Integer depth;
}
