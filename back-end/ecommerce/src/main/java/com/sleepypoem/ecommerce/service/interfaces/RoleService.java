package com.sleepypoem.ecommerce.service.interfaces;

import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import com.sleepypoem.ecommerce.domain.entities.RoleEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RoleService {

    RoleEntity save(RoleEntity role);

    RoleEntity findById(Long id);

    RoleEntity update(Long id, RoleEntity role);

    void deleteById(Long id);

    void delete(RoleEntity role);

    Page<RoleEntity> findAll(Pageable pageable);

    Page<RoleEntity> findByNameContaining(String name, Pageable pageable);

    RoleEntity findByName(String name);

    RoleEntity assignPermission(Long roleId, PermissionEntity permission);

    RoleEntity removePermission(Long roleId, Long permissionId);
}
