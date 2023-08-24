package com.sleepypoem.ecommerce.repositories;

import com.sleepypoem.ecommerce.domain.entities.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

    Page<ProductEntity> findAllByCategoryId(@Param("id") Long categoryId, Pageable pageable);

    Page<ProductEntity> findByNameContaining(@Param("name") String name, Pageable pageable);
}
