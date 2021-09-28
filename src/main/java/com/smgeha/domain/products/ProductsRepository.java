package com.smgeha.domain.products;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ProductsRepository {

    List<Products> findByProductId(@Param(value = "id") short id);
    List<Products> productsSideMenuSelect(
            @Param(value ="id") short id,
            @Param(value="manufactures") short[] manufactures,
            @Param(value="types") short[] types,
            @Param(value="sizes") short[] sizes);
}
