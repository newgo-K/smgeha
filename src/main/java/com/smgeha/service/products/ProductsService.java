package com.smgeha.service.products;

import com.smgeha.domain.posts.Posts;
import com.smgeha.domain.products.Products;
import com.smgeha.domain.products.ProductsRepository;
import com.smgeha.web.dto.PostsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    public List<Products> findAllDesc() {
        return productsRepository.findAllDesc();
    }

    public List<Products> findByProductId (short id) {
        return productsRepository.findByProductId(id);
    }
}
