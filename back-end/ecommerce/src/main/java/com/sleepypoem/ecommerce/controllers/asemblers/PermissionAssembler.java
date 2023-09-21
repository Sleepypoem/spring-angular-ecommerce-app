package com.sleepypoem.ecommerce.controllers.asemblers;

import com.sleepypoem.ecommerce.controllers.PermissionController;
import com.sleepypoem.ecommerce.domain.entities.PermissionEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class PermissionAssembler implements RepresentationModelAssembler<PermissionEntity, EntityModel<PermissionEntity>> {
    @Override
    public EntityModel<PermissionEntity> toModel(PermissionEntity permission) {
        return EntityModel.of(permission, linkTo(methodOn(PermissionController.class).one(permission.getId())).withSelfRel(),
                linkTo(methodOn(PermissionController.class).all(PageRequest.of(0,10))).withRel("permissions"));
    }
}
