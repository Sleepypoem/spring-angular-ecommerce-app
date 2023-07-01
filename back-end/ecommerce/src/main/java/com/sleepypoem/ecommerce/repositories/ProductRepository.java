package com.sleepypoem.ecommerce.repositories;

import com.sleepypoem.ecommerce.domain.entities.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "products", collectionResourceRel = "products")
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
}
