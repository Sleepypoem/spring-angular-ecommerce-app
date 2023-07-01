package com.sleepypoem.ecommerce.repositories;

import com.sleepypoem.ecommerce.domain.entities.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "categories", collectionResourceRel = "categories")
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
}
