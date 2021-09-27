package com.smgeha.service.products;

import com.smgeha.domain.products.Products;

import java.util.List;

public interface ProductsService {
    List<Products> findByProductId (short id);
}
