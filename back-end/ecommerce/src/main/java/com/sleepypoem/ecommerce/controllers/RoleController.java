package com.sleepypoem.ecommerce.controllers;

import com.sleepypoem.ecommerce.annotations.AuthorizeForAdmin;
import com.sleepypoem.ecommerce.controllers.asemblers.RoleAssembler;
import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import com.sleepypoem.ecommerce.domain.entities.RoleEntity;
import com.sleepypoem.ecommerce.service.impl.RoleServiceImpl;
import com.sleepypoem.ecommerce.service.interfaces.RoleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/roles")
public class RoleController {

    private final RoleService roleService;

    private final PagedResourcesAssembler<RoleEntity> pagedResourcesAssembler;

    private final RoleAssembler roleAssembler;

    public RoleController(RoleServiceImpl roleService, PagedResourcesAssembler<RoleEntity> pagedResourcesAssembler, RoleAssembler roleAssembler) {
        this.roleService = roleService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
        this.roleAssembler = roleAssembler;
    }

    @GetMapping
    @SuppressWarnings("squid:S1452")
    public PagedModel<?> all(@PageableDefault Pageable pageable) {
        Page<RoleEntity> roles = roleService.findAll(pageable);
        if (!roles.hasContent()) {
            return pagedResourcesAssembler.toEmptyModel(roles, RoleEntity.class);
        }else {
            return pagedResourcesAssembler.toModel(roles, roleAssembler);
        }
    }

    @GetMapping("/{id}")
    public EntityModel<RoleEntity> one(@PathVariable Long id) {
        RoleEntity role = roleService.findById(id);
        return roleAssembler.toModel(role);
    }

    @GetMapping("/search/findByName")
    public EntityModel<RoleEntity> oneByName(@RequestParam String name) {
        RoleEntity role = roleService.findByName(name);
        return roleAssembler.toModel(role);
    }

    @GetMapping("/search/findByNameContaining")
    @SuppressWarnings("squid:S1452")
    public CollectionModel<?> allByNameContaining(@RequestParam String name, @PageableDefault Pageable pageable) {
        Page<RoleEntity> roles = roleService.findByNameContaining(name, pageable);
        if (!roles.hasContent()){
            return pagedResourcesAssembler.toEmptyModel(roles, RoleEntity.class);
        }
        else {
            return pagedResourcesAssembler.toModel(roles, roleAssembler);
        }
    }

    @PostMapping
    public EntityModel<RoleEntity> newRole(@RequestBody RoleEntity role) {
        RoleEntity savedRole = roleService.save(role);
        return roleAssembler.toModel(savedRole);
    }

    @PreAuthorize("authentication.jwt.claims['role'].contains('ADMIN')")
    @PostMapping("/{id}/permissions")
    public EntityModel<RoleEntity> addPermissions(@PathVariable Long id, @RequestBody PermissionEntity permission) {
        RoleEntity savedRole = roleService.assignPermission(id, permission);
        return roleAssembler.toModel(savedRole);
    }


    @PutMapping("/{id}")
    public EntityModel<RoleEntity> updateRole(@RequestBody RoleEntity role, @PathVariable Long id) {
        RoleEntity savedRole = roleService.save(role);
        return roleAssembler.toModel(savedRole);
    }

    @DeleteMapping("/{id}")
    public void deleteRole(@PathVariable Long id) {
        roleService.deleteById(id);
    }


    @DeleteMapping("/{id}/permissions/{permissionId}")
    public EntityModel<RoleEntity> removePermissions(@PathVariable Long id, @PathVariable Long permissionId) {
        RoleEntity savedRole = roleService.removePermission(id, permissionId);
        return roleAssembler.toModel(savedRole);
    }

    @GetMapping("/test")
    @AuthorizeForAdmin
    public String test() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtAuthenticationToken jwtAuthenticationToken = (JwtAuthenticationToken) authentication;
        return jwtAuthenticationToken.getToken().getClaim("role");
    }
}
