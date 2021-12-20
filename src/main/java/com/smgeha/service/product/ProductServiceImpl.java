package com.smgeha.service.product;

import com.smgeha.domain.product.Product;
import com.smgeha.domain.product.ProductDTO;
import com.smgeha.domain.product.ProductRepository;
import com.smgeha.domain.product.ProductSubCategorySerachDTO;
import com.smgeha.mapper.product.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductMapper productMapper;

    @Override
    public List<ProductDTO> selectProductList(@Param(value = "code") int code) {
        return productMapper.selectProductList(code);
    }

    @Override
    public List<ProductDTO> findSubCategoryProductList(@Param(value = "searchCodes") ProductSubCategorySerachDTO searchCodes) {
      return productMapper.findSubCategoryProductList(searchCodes);
    }

    @Override
    public ProductDTO selectProductInfo(@Param(value = "id") int id) {
        ProductDTO product = productMapper.selectProductInfo(id);
        product.setSubImages(productMapper.selectProductSubImage(id));

        return product;
    };
//    @Override
//    public Product findByProductId(@Param(value = "id") int id) {
//        Product product = productRepositoy.findByProductId(id);
//        product.setImgs(productRepositoy.findByProductContent(id));
//
//        return product;
//    }
}
