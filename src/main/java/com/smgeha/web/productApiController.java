//package com.smgeha.web;
//
//import com.smgeha.domain.product.Product;
//import com.smgeha.domain.products.Products;
//import com.smgeha.service.product.ProductService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.PatchMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RequiredArgsConstructor
//@RestController
//public class productApiController {
//    private final ProductService productService;
//
//    @PatchMapping("/product/{id}")
//    public Product findById (@PathVariable int id) {
//        Product a = productService.findByProductId(id);
//        return a;
//    }
//}
