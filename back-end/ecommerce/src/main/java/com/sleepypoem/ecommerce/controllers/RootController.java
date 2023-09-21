package com.sleepypoem.ecommerce.controllers;

import org.springframework.data.rest.webmvc.RepositoryLinksResource;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@Controller
@RequestMapping("/")
public class RootController implements
        RepresentationModelProcessor<RepositoryLinksResource> {
    @Override
    public RepositoryLinksResource process(RepositoryLinksResource model) {
        model.add(
                linkTo(ProductController.class)
                        .withRel("products")).add(
                linkTo(CustomerController.class)
                        .withRel("customers")).add(
                linkTo(RoleController.class)
                        .withRel("roles")).add(
                linkTo(PermissionController.class)
                        .withRel("permissions"));
        return model;
    }
}
