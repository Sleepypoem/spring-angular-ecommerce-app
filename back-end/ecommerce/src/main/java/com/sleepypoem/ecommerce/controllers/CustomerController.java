package com.sleepypoem.ecommerce.controllers;

import com.sleepypoem.ecommerce.controllers.asemblers.CustomerAssembler;
import com.sleepypoem.ecommerce.domain.dtos.PasswordChangeRequestDto;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.service.interfaces.CustomerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private final CustomerService customerService;

    private final PagedResourcesAssembler<CustomerEntity> pagedResourcesAssembler;

    private final CustomerAssembler customerAssembler;

    public CustomerController(CustomerService customerService, PagedResourcesAssembler<CustomerEntity> pagedResourcesAssembler, CustomerAssembler customerAssembler) {
        this.customerService = customerService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
        this.customerAssembler = customerAssembler;
    }

    @GetMapping
    public PagedModel<EntityModel<CustomerEntity>> all(@PageableDefault Pageable pageable) {
        Page<CustomerEntity> customers = customerService.getAll(pageable);
        return pagedResourcesAssembler.toModel(customers, customerAssembler);
    }

    @GetMapping("/search/findAllByFirstNameContaining")
    public PagedModel<EntityModel<CustomerEntity>> allByFirstNameContaining(@RequestParam String firstName, @PageableDefault Pageable pageable) {
        Page<CustomerEntity> customers = customerService.getAllByFirstNameContaining(firstName, pageable);
        return pagedResourcesAssembler.toModel(customers, customerAssembler);
    }


    @GetMapping("/search/findAllByLastNameContaining")
    public PagedModel<EntityModel<CustomerEntity>> allByLastNameContaining(@RequestParam String lastName, @PageableDefault Pageable pageable) {
        Page<CustomerEntity> customers = customerService.getAllByLastNameContaining(lastName, pageable);
        return pagedResourcesAssembler.toModel(customers, customerAssembler);
    }


    @GetMapping("/search/findByEmail")
    public EntityModel<CustomerEntity> oneByEmail(@RequestParam String email) {
        CustomerEntity customer = customerService.getByEmail(email);
        return customerAssembler.toModel(customer);
    }

    @GetMapping("/{id}")
    public EntityModel<CustomerEntity> one(@PathVariable Long id) {
        CustomerEntity customer = customerService.getById(id);
        return customerAssembler.toModel(customer);
    }


    @PostMapping
    public EntityModel<CustomerEntity> create(@RequestBody CustomerEntity customer) {
        CustomerEntity newCustomer = customerService.create(customer);
        return customerAssembler.toModel(newCustomer);
    }


    @PutMapping("/{id}")
    public EntityModel<CustomerEntity> update(@RequestBody CustomerEntity customer, @PathVariable Long id) {
        CustomerEntity updatedCustomer = customerService.update(id, customer);
        return customerAssembler.toModel(updatedCustomer);
    }

    @PatchMapping("/{id}")
    public void changePassword( @PathVariable Long id,
                                @RequestBody PasswordChangeRequestDto passwordChangeRequestDto) {
        customerService.changePassword(id, passwordChangeRequestDto.getOldPassword(), passwordChangeRequestDto.getNewPassword());
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = org.springframework.http.HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        customerService.deleteById(id);
    }
}
