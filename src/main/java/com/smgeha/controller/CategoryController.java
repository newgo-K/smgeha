package com.smgeha.controller;

import com.smgeha.domain.category.ProductCategoryDTO;
import com.smgeha.domain.category.ProductSubCategoryDTO;
import com.smgeha.domain.category.WriteCategoryDTO;
import com.smgeha.domain.category.WriteCategoryListDTO;
import com.smgeha.service.category.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping(value = "/productCategory")
    public List<ProductCategoryDTO> getProductCategoryList() {
        return categoryService.getProductCategoryList();
    }

    @GetMapping(value = "/productSubCategory/{code}")
    public List<ProductSubCategoryDTO> selectProductSubCategoryList(@PathVariable int code) {
        return categoryService.selectProductSubCategoryList(code);
    }

    @PostMapping(value = "/writeCategory")
    public WriteCategoryListDTO getWrtieCategoryList(@RequestBody WriteCategoryDTO categoryDTO) {
        return categoryService.getWriteCategoryList(categoryDTO.getProductCategoryId());}
}
