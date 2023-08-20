package com.sleepypoem.ecommerce.controllers;

import com.okta.sdk.resource.model.User;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.service.interfaces.OktaUserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/okta/users")
@PreAuthorize("authentication.token.claims['role'] == 'admin'")
public class OktaUserController {

    private final OktaUserService oktaUserService;


    public OktaUserController(OktaUserService oktaUserService) {
        this.oktaUserService = oktaUserService;
    }

    @PostMapping
    public void createOktaUser(@RequestBody CustomerEntity customerEntity) {
        oktaUserService.createOktaUser(customerEntity);
    }

    @GetMapping("/{id}")
    public User getOktaUserById(@PathVariable String id) {
        return oktaUserService.getOktaUser(id);
    }


    @DeleteMapping("/{id}")
    public void deleteOktaUserById(@PathVariable String id) {
        oktaUserService.deleteOktaUser(id);
    }
}
