package com.smgeha.service.product;

import com.smgeha.domain.auth.PrincipalDetails;
import com.smgeha.domain.product.Product;
import com.smgeha.domain.product.ProductDTO;
import com.smgeha.domain.product.ProductRepository;
import com.smgeha.domain.product.ProductSubCategorySerachDTO;
import com.smgeha.mapper.product.ProductMapper;
import com.smgeha.service.auth.UserService;
import com.smgeha.web.dto.auth.Role;
import com.smgeha.web.util.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private UserService userService;

    @Override
    public List<ProductDTO> selectProductList(@Param(value = "code") int code) {
        String role = userService.getRole();

        if(role.equals("ROLE_SUB_ADMIN")) {
            return productMapper.selectProductPriceList(code);
        } else {
            return productMapper.selectProductList(code);
        }
    }

    @Override
    public List<ProductDTO> findSubCategoryProductList(@Param(value = "searchCodes") ProductSubCategorySerachDTO searchCodes) {
      return productMapper.findSubCategoryProductList(searchCodes);
    }

    @Override
    public ProductDTO selectProductInfo(@Param(value = "id") int id) {
        ProductDTO product = new ProductDTO();
        String role = userService.getRole();

        if(role.equals("ROLE_SUB_ADMIN")) {
            product = productMapper.selectProductPriceInfo(id);
        } else {
            product = productMapper.selectProductInfo(id);
        }

        if(product == null) {
            product = new ProductDTO();

            product.setId(new Long(-1));
            return product;
        }

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
    @Override
    public void deleteProductInfo(int id) {
        productMapper.deleteProductSubImg(id);
        productMapper.deleteProductSearchInfo(id);
        productMapper.deleteProductInfo(id);
    };
}
