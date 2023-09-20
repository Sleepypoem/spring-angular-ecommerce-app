package com.sleepypoem.ecommerce.service.interfaces;

import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PermissionService {

    PermissionEntity save(PermissionEntity permission);


    PermissionEntity findById(Long id);


    PermissionEntity update(Long id, PermissionEntity permission);


    void deleteById(Long id);


    void delete(PermissionEntity permission);


    PermissionEntity findByName(String name);


    Page<PermissionEntity> findAll(Pageable pageable);


    Page<PermissionEntity> findByNameContaining(String name, Pageable pageable);


}
