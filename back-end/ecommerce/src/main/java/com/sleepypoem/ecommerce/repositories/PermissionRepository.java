package com.sleepypoem.ecommerce.repositories;

import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PermissionRepository extends JpaRepository<PermissionEntity, Long> {

    Optional<PermissionEntity> findByName(String name);

    Page<PermissionEntity> findByNameContaining(String name, Pageable pageable);
}
