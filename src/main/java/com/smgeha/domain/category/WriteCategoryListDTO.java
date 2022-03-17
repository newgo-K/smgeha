package com.smgeha.domain.category;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class WriteCategoryListDTO {
    private List<WriteCategoryDTO> prodcutCategoryList;
    private List<WriteCategoryDTO> manufactureCategoryList;
    private List<WriteCategoryDTO> sizeCategoryList;
    private List<WriteCategoryDTO> typeCategoryList;
}