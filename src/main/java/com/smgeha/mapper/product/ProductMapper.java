package com.smgeha.mapper.product;

import com.smgeha.domain.product.ProductDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    public List<ProductDTO> selectProductList(int code);
}
