package com.sleepypoem.ecommerce.controllers.asemblers;

import com.sleepypoem.ecommerce.controllers.ProductController;
import com.sleepypoem.ecommerce.domain.entities.CategoryEntity;
import com.sleepypoem.ecommerce.domain.entities.ProductEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.EntityLinks;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class ProductAssembler implements RepresentationModelAssembler<ProductEntity, EntityModel<ProductEntity>> {

    private final EntityLinks entityLinks;

    public ProductAssembler(EntityLinks entityLinks) {
        this.entityLinks = entityLinks;
    }

    @Override
    public EntityModel<ProductEntity> toModel(ProductEntity product) {
        return EntityModel.of(product,
                linkTo(methodOn(ProductController.class).one(product.getId())).withSelfRel(),
                linkTo(methodOn(ProductController.class).all(PageRequest.of(0, 10))).withRel("products"),
                entityLinks.linkToItemResource(CategoryEntity.class,  product.getCategory().getId()).withRel("category")
        );
    }
}
