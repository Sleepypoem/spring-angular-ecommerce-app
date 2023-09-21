package com.sleepypoem.ecommerce.controllers.asemblers;

import com.sleepypoem.ecommerce.controllers.RoleController;
import com.sleepypoem.ecommerce.domain.entities.RoleEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class RoleAssembler implements RepresentationModelAssembler<RoleEntity, EntityModel<RoleEntity>> {
    @Override
    public EntityModel<RoleEntity> toModel(RoleEntity role) {
        return EntityModel.of(role, linkTo(methodOn(RoleController.class).one(role.getId())).withSelfRel(),
                linkTo(methodOn(RoleController.class).all(PageRequest.of(0,10))).withRel("roles"));
    }
}
