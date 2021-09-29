package com.smgeha.service.product;

import com.smgeha.domain.product.Product;
import com.smgeha.domain.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepositoy;

    @Override
    public Product findByProductId(@Param(value = "id") int id) {
        Product product = productRepositoy.findByProductId(id);
        product.setImgList(productRepositoy.findByProductContent(id));

        return product;
    }
}
