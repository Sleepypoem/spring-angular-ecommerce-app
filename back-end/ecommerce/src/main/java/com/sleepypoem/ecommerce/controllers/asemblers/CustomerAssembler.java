package com.sleepypoem.ecommerce.controllers.asemblers;

import com.sleepypoem.ecommerce.controllers.CustomerController;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class CustomerAssembler implements RepresentationModelAssembler<CustomerEntity, EntityModel<CustomerEntity>>  {

    @Override
    public EntityModel<CustomerEntity> toModel(CustomerEntity customer) {
        return EntityModel.of(customer,
                linkTo(methodOn(CustomerController.class).one(customer.getId())).withSelfRel(),
                linkTo(methodOn(CustomerController.class).all(PageRequest.of(0, 10))).withRel("customers"),
                Link.of("https://localhost:8081/orders/search/findAllByCustomerEmailOrderByCreatedAtDesc?email=" + customer.getEmail() ).withRel("orders")
        );
    }
}
