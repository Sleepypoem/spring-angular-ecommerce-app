package com.sleepypoem.ecommerce.service.interfaces;

import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.domain.entities.RoleEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CustomerService {

    CustomerEntity create(CustomerEntity customerEntity);

    CustomerEntity getById(Long id);

    CustomerEntity getByEmail(String email);

    CustomerEntity update(Long id, CustomerEntity customerEntity);

    void changePassword(Long id, String oldPassword, String newPassword);

    void deleteById(Long id);

    Page<CustomerEntity> getAll(Pageable pageable);


    Page<CustomerEntity> getAllByFirstNameContaining(String firstName, Pageable pageable);


    Page<CustomerEntity> getAllByLastNameContaining(String lastName, Pageable pageable);

    boolean existsByEmail(String email);

    boolean existsById(Long id);

    CustomerEntity assignRole(Long id, RoleEntity role);

    CustomerEntity setRoleToDefault(Long id);
}
