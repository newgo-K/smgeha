package com.smgeha.web;

import com.smgeha.domain.products.Products;
import com.smgeha.service.products.ProductsService;
import com.smgeha.web.dto.PostsResponseDto;
import com.smgeha.web.dto.products.ProductsSideMenuSelectRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductsApiController {
    private final ProductsService productsService;

    @GetMapping("/main")
    public List<Products> findById () {
        short id = 0;
        return productsService.findByProductId(id);
    }

    @PatchMapping("/main/{id}")
    public List<Products> findById (@PathVariable short id) {
        return productsService.findByProductId(id);
    }

    @PostMapping("/main")
    public List<Products> productsSideMenuSelect (@RequestBody ProductsSideMenuSelectRequestDto sideMenus) {
        return productsService.productsSideMenuSelect(sideMenus);
    }
}
