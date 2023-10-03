package com.sleepypoem.ecommerce.controllers;

import com.sleepypoem.ecommerce.annotations.AuthorizeForAdmin;
import com.sleepypoem.ecommerce.controllers.asemblers.CustomerAssembler;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.domain.entities.RoleEntity;
import com.sleepypoem.ecommerce.service.interfaces.CustomerService;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
//@AuthorizeForAdmin
public class AdminController {

    private final CustomerService customerService;

    private final CustomerAssembler customerAssembler;

    public AdminController(CustomerService customerService, CustomerAssembler customerAssembler) {
        this.customerService = customerService;
        this.customerAssembler = customerAssembler;
    }

    @PatchMapping("/user/{id}/role")
    public EntityModel<CustomerEntity> updateRole(@PathVariable Long id, @RequestBody RoleEntity role) {
        return customerAssembler.toModel(customerService.assignRole(id, role));
    }

    @DeleteMapping("/user/{id}/role")
    @ResponseStatus(code = org.springframework.http.HttpStatus.NO_CONTENT)
    public void deleteRole(@PathVariable Long id) {
        customerService.setRoleToDefault(id);
    }

    @PatchMapping("/user/{id}/activate")
    @ResponseStatus(code = org.springframework.http.HttpStatus.OK)
    public void activate(@PathVariable Long id) {
        customerService.activate(id);
    }


    @PatchMapping("/user/{id}/deactivate")
    @ResponseStatus(code = org.springframework.http.HttpStatus.OK)
    public void deactivate(@PathVariable Long id) {
        customerService.deactivate(id);
    }

}
