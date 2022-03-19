package com.smgeha.controller;

import com.smgeha.domain.auth.AuthDTO;
import com.smgeha.domain.auth.PrincipalDetails;
import com.smgeha.domain.product.Product;
import com.smgeha.domain.product.ProductDTO;
import com.smgeha.domain.product.ProductSubCategorySerachDTO;
import com.smgeha.service.auth.UserService;
import com.smgeha.service.product.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @Autowired
    UserService userService;

    @GetMapping("/main/{code}")
    public List<ProductDTO> selectProductList(@PathVariable int code) {
        return productService.selectProductList(code);
    }

    @PostMapping("/main")
    public List<ProductDTO> findSubCategoryProductList(@RequestBody ProductSubCategorySerachDTO searchCodes) {
        return productService.findSubCategoryProductList(searchCodes);
    }

    @GetMapping("/product/{id}")
    public ProductDTO selectProductInfo(@PathVariable int id) {
        return productService.selectProductInfo(id);
    }

    @DeleteMapping("/product/{id}")
    public void deleteProductInfo(@PathVariable int id) {
        productService.deleteProductInfo(id);
    }

}
