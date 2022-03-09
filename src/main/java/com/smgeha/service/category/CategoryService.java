package com.smgeha.service.category;

import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.domain.category.ProductSubCategoryDTO;
import com.smgeha.domain.category.WriteCategoryDTO;
import com.smgeha.domain.category.WriteCategoryListDTO;

import java.util.List;

public interface CategoryService {
    public List<ProductCategoryDTO> getProductCategoryList();
    public List<ProductSubCategoryDTO> selectProductSubCategoryList(int code);
    public WriteCategoryListDTO getWriteCategoryList(int id);
}
