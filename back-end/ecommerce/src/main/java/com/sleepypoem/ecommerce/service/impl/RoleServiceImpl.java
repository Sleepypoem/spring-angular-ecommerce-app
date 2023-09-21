package com.sleepypoem.ecommerce.service.impl;

import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import com.sleepypoem.ecommerce.domain.entities.RoleEntity;
import com.sleepypoem.ecommerce.exceptions.MyBadRequestException;
import com.sleepypoem.ecommerce.exceptions.MyEntityNotFoundException;
import com.sleepypoem.ecommerce.repositories.RoleRepository;
import com.sleepypoem.ecommerce.service.interfaces.PermissionService;
import com.sleepypoem.ecommerce.service.interfaces.RoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Slf4j
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    private final PermissionService permissionService;


    public RoleServiceImpl(RoleRepository roleRepository, PermissionService permissionService) {
        this.roleRepository = roleRepository;
        this.permissionService = permissionService;
    }
    @Override
    public RoleEntity save(RoleEntity role) {
        return roleRepository.save(role);
    }

    @Override
    public RoleEntity findById(Long id) {
        return roleRepository.findById(id).orElseThrow(() -> new MyEntityNotFoundException("Role with id " + id + " not found"));
    }

    @Override
    public RoleEntity update(Long id, RoleEntity role) {
        if(!Objects.equals(id, role.getId())){
            throw new MyBadRequestException("Id not match with role id: " + id);
        }
        return roleRepository.save(role);
    }

    @Override
    public void deleteById(Long id) {
        roleRepository.deleteById(id);
    }

    @Override
    public void delete(RoleEntity role) {
        roleRepository.delete(role);
    }

    @Override
    public Page<RoleEntity> findAll(Pageable pageable) {
        return roleRepository.findAll(pageable);
    }

    @Override
    public Page<RoleEntity> findByNameContaining(String name, Pageable pageable) {
        return roleRepository.findByNameContaining(name, pageable);
    }

    @Override
    public RoleEntity findByName(String name) {
        return roleRepository.findByName(name).orElseThrow(() -> new MyEntityNotFoundException("Role with name " + name + " not found"));
    }

    @Override
    public RoleEntity assignPermission(Long roleId, PermissionEntity permission) {
        RoleEntity role = findById(roleId);
        role.addPermission(permission);
        return roleRepository.save(role);
    }

    @Override
    public RoleEntity removePermission(Long roleId, Long permissionId) {
        RoleEntity role = findById(roleId);
        PermissionEntity permission = permissionService.findById(permissionId);
        role.removePermission(permission);
        return roleRepository.save(role);
    }
}
