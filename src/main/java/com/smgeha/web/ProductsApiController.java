package com.smgeha.web;

import com.smgeha.domain.products.Products;
import com.smgeha.service.products.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductsApiController {
    private final ProductsService productsService;

    @GetMapping("/main")
    public List<Products> findAllDesc() {
        return productsService.findAllDesc();
    }
}
