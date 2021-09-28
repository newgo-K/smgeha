package com.smgeha.service.products;

import com.smgeha.domain.products.Products;
import com.smgeha.domain.products.ProductsRepository;
import com.smgeha.web.dto.products.ProductsSideMenuSelectRequestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsServiceImpl implements ProductsService {
    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public List<Products> findByProductId(@Param(value = "id") short id) {
        return productsRepository.findByProductId(id);
    }

    @Override
    public List<Products> productsSideMenuSelect(ProductsSideMenuSelectRequestDto sideMenus) {
        short id = sideMenus.getId();
        short[] manufactures = sideMenus.getSideMenus()[0];
        short[] types = sideMenus.getSideMenus()[1];
        short[] sizes = sideMenus.getSideMenus()[2];

        return productsRepository.productsSideMenuSelect(id, manufactures, types, sizes);
    }
}
