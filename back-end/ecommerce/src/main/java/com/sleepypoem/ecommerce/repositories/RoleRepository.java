package com.sleepypoem.ecommerce.repositories;

import com.sleepypoem.ecommerce.domain.entities.RoleEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {

    Page<RoleEntity> findByNameContaining(@Param("name") String name, Pageable pageable);

    Optional<RoleEntity> findByName(String name);
}
