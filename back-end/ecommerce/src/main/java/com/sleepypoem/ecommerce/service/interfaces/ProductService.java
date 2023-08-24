package com.sleepypoem.ecommerce.service.interfaces;

import com.sleepypoem.ecommerce.domain.entities.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {

    ProductEntity save(ProductEntity product);


    ProductEntity findById(Long id);


    ProductEntity update(Long id, ProductEntity product);


    void delete(ProductEntity product);


    void deleteById(Long id);


    Page<ProductEntity> findAll(Pageable pageable);


    Page<ProductEntity> findAllByCategoryId(Long categoryId, Pageable pageable);



    Page<ProductEntity> findByNameContaining(String name, Pageable pageable);
}
