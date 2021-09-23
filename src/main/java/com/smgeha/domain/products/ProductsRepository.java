package com.smgeha.domain.products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductsRepository extends JpaRepository<Products, Long> {
    @Query(value = "SELECT * FROM Product order by createdDate", nativeQuery = true)
    List<Products> findAllDesc();
}
