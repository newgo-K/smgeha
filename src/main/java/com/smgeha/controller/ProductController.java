package com.smgeha.controller;

import com.smgeha.domain.product.ProductDTO;
import com.smgeha.service.product.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/main/{code}")
    public List<ProductDTO> selectProductList(@PathVariable int code) {
        return productService.selectProductList(code);
    }

    @GetMapping("/product/{id}")
    public ProductDTO selectProductInfo(@PathVariable int id) {
        return productService.selectProductInfo(id);
    }
}
