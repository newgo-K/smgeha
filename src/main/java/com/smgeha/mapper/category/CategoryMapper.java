package com.smgeha.mapper.category;

import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.domain.category.ProductSubCategoryDTO;
import com.smgeha.domain.category.WriteCategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    public List<ProductCategoryDTO> getProductCategoryList();
    public List<ProductSubCategoryDTO> selectProductSubCategoryList(int code);
    public List<WriteCategoryDTO> getWriteProductCategoryList();
    public List<WriteCategoryDTO> getWriteManufactureCategoryList(int id);
    public List<WriteCategoryDTO> getWriteSizeCategoryList(int id);
    public List<WriteCategoryDTO> getWriteTypeCategoryList(int id);
}
