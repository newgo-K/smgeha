package com.smgeha.mapper.product;

import com.smgeha.domain.product.ProductDTO;
import com.smgeha.domain.product.ProductSubCategorySerachDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    public List<ProductDTO> selectProductPriceList(int code);
    public List<ProductDTO> selectProductList(int code);
    public List<ProductDTO> findSubCategoryProductList(ProductSubCategorySerachDTO searchCodes);
    public ProductDTO selectProductPriceInfo(int id);
    public ProductDTO selectProductInfo(int id);
    public List<String> selectProductSubImage(int id);
}
