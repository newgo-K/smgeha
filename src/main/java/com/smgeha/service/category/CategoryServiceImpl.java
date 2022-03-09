package com.smgeha.service.category;

import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.domain.category.ProductSubCategoryDTO;
import com.smgeha.domain.category.WriteCategoryListDTO;
import com.smgeha.mapper.category.CategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public List<ProductCategoryDTO> getProductCategoryList() {
        return categoryMapper.getProductCategoryList();
    }

    @Override
    public List<ProductSubCategoryDTO> selectProductSubCategoryList(@Param(value = "code") int code) {
        return categoryMapper.selectProductSubCategoryList(code);
    }

    @Override
    public WriteCategoryListDTO getWriteCategoryList(int id) {
        WriteCategoryListDTO categoryList = new WriteCategoryListDTO();

        categoryList.setProdcutCategoryList(categoryMapper.getWriteProductCategoryList());
        categoryList.setManufactureCategoryList(categoryMapper.getWriteManufactureCategoryList(id));
        categoryList.setSizeCategoryList(categoryMapper.getWriteSizeCategoryList(id));
        categoryList.setTyoeCategoryList(categoryMapper.getWriteTyoeCategoryList(id));

        return categoryList;
    }

}
