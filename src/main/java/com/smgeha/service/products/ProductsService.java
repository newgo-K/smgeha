package com.smgeha.service.products;

import com.smgeha.domain.products.Products;
import com.smgeha.web.dto.products.ProductsSideMenuSelectRequestDto;

import java.util.List;

public interface ProductsService {
    List<Products> findByProductId (short id);
    List<Products> productsSideMenuSelect (ProductsSideMenuSelectRequestDto sideMenus);
}
