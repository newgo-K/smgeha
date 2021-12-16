package com.smgeha.service.category;

import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.domain.category.ProductSubCategoryDTO;

import java.util.List;

public interface CategoryService {
    public List<ProductCategoryDTO> getProductCategoryList();
    public List<ProductSubCategoryDTO> selectProductSubCategoryList(int code);
}
