package com.smgeha.service.product;

import com.smgeha.domain.product.Product;
import com.smgeha.domain.product.ProductDTO;

import java.util.List;

public interface ProductService {
    public List<ProductDTO> selectProductList(int code);
    public ProductDTO selectProductInfo(int id);
}
