package com.sleepypoem.ecommerce.repositories;

import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity, Long> {

    Optional<CustomerEntity> findByEmail(String email);

    Page<CustomerEntity> findAllByFirstNameContainingIgnoreCase(String firstName, Pageable pageable);


    Page<CustomerEntity> findAllByLastNameContainingIgnoreCase(String lastName, Pageable pageable);


}
