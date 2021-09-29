package com.smgeha.domain.product;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ProductRepository {
    Product findByProductId(@Param(value = "id") int id);
    List<String> findByProductContent (@Param(value = "id") int id);
}
