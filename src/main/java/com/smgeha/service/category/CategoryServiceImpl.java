package com.smgeha.service.category;

import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.mapper.category.CategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public List<ProductCategoryDTO> getProductCategoryList() {
        return categoryMapper.getProductCategoryList();
    }
}
