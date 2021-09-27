package com.smgeha.web;

import com.smgeha.domain.products.Products;
import com.smgeha.service.products.ProductsService;
import com.smgeha.web.dto.PostsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductsApiController {
    private final ProductsService productsService;

    @GetMapping("/main")
    public List<Products> findById () {
        short id = 2;
        return productsService.findByProductId(id);
    }

    @PatchMapping("/main/{id}")
    public List<Products> findById (@PathVariable short id) {
        return productsService.findByProductId(id);
    }

}
