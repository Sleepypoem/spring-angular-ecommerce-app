package com.sleepypoem.ecommerce.controllers;

import com.sleepypoem.ecommerce.controllers.asemblers.PermissionAssembler;
import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import com.sleepypoem.ecommerce.service.interfaces.PermissionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/permissions")
public class PermissionController {

    private final PermissionService permissionService;

    private final PermissionAssembler permissionAssembler;

    private final PagedResourcesAssembler<PermissionEntity> pagedResourcesAssembler;


    public PermissionController(PermissionService permissionService, PermissionAssembler permissionAssembler, PagedResourcesAssembler<PermissionEntity> pagedResourcesAssembler) {
        this.permissionService = permissionService;
        this.permissionAssembler = permissionAssembler;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    @GetMapping
    @SuppressWarnings("squid:S1452")
    public PagedModel<?> all(@PageableDefault Pageable pageable) {
        Page<PermissionEntity> permissions = permissionService.findAll(pageable);
        if(!permissions.hasContent()) {
            return pagedResourcesAssembler.toEmptyModel(permissions, PermissionEntity.class);
        }
        else {
            return pagedResourcesAssembler.toModel(permissions, permissionAssembler);
        }
    }

    @GetMapping("/{id}")
    public EntityModel<PermissionEntity> one(@PathVariable Long id) {
        PermissionEntity permission = permissionService.findById(id);
        return permissionAssembler.toModel(permission);
    }


    @GetMapping("/search/findByNameContaining")
    @SuppressWarnings("squid:S1452")
    public PagedModel<?> allByNameContaining(@RequestParam String name, @PageableDefault Pageable pageable) {
        Page<PermissionEntity> permissions = permissionService.findByNameContaining(name, pageable);
        if (!permissions.hasContent()) {
            return pagedResourcesAssembler.toEmptyModel(permissions, PermissionEntity.class);
        }
        else {
            return pagedResourcesAssembler.toModel(permissions, permissionAssembler);
        }
    }

    @GetMapping("/search/findByName")
    public EntityModel<PermissionEntity> oneByName(@RequestParam String name) {
        PermissionEntity permission = permissionService.findByName(name);
        return permissionAssembler.toModel(permission);
    }


    @PostMapping
    public EntityModel<PermissionEntity> newPermission(@RequestBody PermissionEntity permission) {
        PermissionEntity savedPermission = permissionService.save(permission);
        return permissionAssembler.toModel(savedPermission);
    }


    @PutMapping("/{id}")
    public EntityModel<PermissionEntity> updatePermission(@RequestBody PermissionEntity permission, @PathVariable Long id) {
        PermissionEntity savedPermission = permissionService.update(id, permission);
        return permissionAssembler.toModel(savedPermission);
    }


    @DeleteMapping("/{id}")
    public void deletePermission(@PathVariable Long id) {
        permissionService.deleteById(id);
    }

}
