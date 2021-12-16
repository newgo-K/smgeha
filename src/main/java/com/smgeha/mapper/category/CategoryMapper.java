package com.smgeha.mapper.category;

import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.domain.category.ProductSubCategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    public List<ProductCategoryDTO> getProductCategoryList();
    public List<ProductSubCategoryDTO> selectProductSubCategoryList(int code);
}
