package com.smgeha.service.product;

import com.smgeha.domain.product.Product;
import com.smgeha.domain.product.ProductDTO;
import com.smgeha.domain.product.ProductSubCategorySerachDTO;

import java.util.List;

public interface ProductService {
    public List<ProductDTO> selectProductList(int code);
    public List<ProductDTO> findSubCategoryProductList(ProductSubCategorySerachDTO searchCodes);
    public ProductDTO selectProductInfo(int id);
}
