package com.sleepypoem.ecommerce.service.impl;

import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import com.sleepypoem.ecommerce.exceptions.MyBadRequestException;
import com.sleepypoem.ecommerce.exceptions.MyEntityNotFoundException;
import com.sleepypoem.ecommerce.repositories.PermissionRepository;
import com.sleepypoem.ecommerce.service.interfaces.PermissionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class PermissionServiceImpl implements PermissionService {

    private final PermissionRepository permissionRepository;


    public PermissionServiceImpl(PermissionRepository permissionRepository) {
        this.permissionRepository = permissionRepository;
    }

    @Override
    public PermissionEntity save(PermissionEntity permission) {
        return permissionRepository.save(permission);
    }

    @Override
    public PermissionEntity findById(Long id) {
        return permissionRepository.findById(id).orElseThrow(() -> new MyEntityNotFoundException("Permission with id: " + id + " not found"));
    }

    @Override
    public PermissionEntity update(Long id, PermissionEntity permission) {
        if(!Objects.equals(id, permission.getId())){
            throw new MyBadRequestException("Id not match with permission id: " + id);
        }
        return permissionRepository.save(permission);
    }

    @Override
    public void deleteById(Long id) {
        permissionRepository.deleteById(id);
    }

    @Override
    public void delete(PermissionEntity permission) {
        permissionRepository.delete(permission);
    }

    @Override
    public PermissionEntity findByName(String name) {
        return permissionRepository.findByName(name).orElseThrow(() -> new MyEntityNotFoundException("Permission with name: " + name + " not found"));
    }

    @Override
    public Page<PermissionEntity> findAll(Pageable pageable) {
        return permissionRepository.findAll(pageable);
    }

    @Override
    public Page<PermissionEntity> findByNameContaining(String name, Pageable pageable) {
        return permissionRepository.findByNameContaining(name, pageable);
    }
}
