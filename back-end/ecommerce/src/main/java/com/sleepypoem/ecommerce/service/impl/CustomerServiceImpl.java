package com.sleepypoem.ecommerce.service.impl;

import com.okta.sdk.resource.client.ApiException;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.exceptions.MyEntityNotFoundException;
import com.sleepypoem.ecommerce.repositories.CustomerRepository;
import com.sleepypoem.ecommerce.service.interfaces.CustomerService;
import com.sleepypoem.ecommerce.service.interfaces.ImageService;
import com.sleepypoem.ecommerce.service.interfaces.OktaUserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    private final ImageService imageService;

    private final OktaUserService oktaUserService;

    private static final String IMAGE_FOLDER = "spring-angular-ecommerce/assets/images/customers/";

    public CustomerServiceImpl(CustomerRepository customerRepository, ImageService imageService, OktaUserService oktaUserService) {
        this.customerRepository = customerRepository;
        this.imageService = imageService;
        this.oktaUserService = oktaUserService;
    }
    @Override
    @Transactional(rollbackFor = ApiException.class)
    public CustomerEntity create(CustomerEntity customerEntity) {
        if(customerEntity.getEncodedImage() == null){
            customerEntity.setImage(imageService.getPlaceholderImage());
        }else{
            customerEntity.setImage(imageService.addImageToFolder(customerEntity.getEncodedImage(), IMAGE_FOLDER));
        }
        oktaUserService.createOktaUser(customerEntity);
        return customerRepository.save(customerEntity);
    }

    @Override
    public CustomerEntity getById(Long id) {
        return customerRepository.findById(id).orElseThrow(() -> new MyEntityNotFoundException("Customer not found with id: " + id));
    }

    @Override
    public CustomerEntity getByEmail(String email) {
        return customerRepository.findByEmail(email).orElseThrow(() -> new MyEntityNotFoundException("Customer not found with email: " + email));
    }

    @Override
    @Transactional
    public CustomerEntity update(Long id, CustomerEntity customerEntity) {
        if(!Objects.equals(id, customerEntity.getId())){
            throw new RuntimeException("Id: " + customerEntity.getId() + " not match with customer id: " + id);
        }
        CustomerEntity customerEntityFromDB = getById(id);
        if(customerEntity.getEncodedImage() != null){
            imageService.deleteImage(customerEntity.getImage());
            customerEntity.setImage(imageService.addImageToFolder(customerEntity.getEncodedImage(), IMAGE_FOLDER));
        }
        //Email cannot be edited
        customerEntity.setEmail(customerEntityFromDB.getEmail());
        return customerRepository.save(customerEntity);
    }

    @Override
    public void deleteById(Long id) {
        CustomerEntity customerEntity = getById(id);
        imageService.deleteImage(customerEntity.getImage());
        customerRepository.delete(customerEntity);
        oktaUserService.deleteOktaUser(customerEntity.getEmail());
    }

    @Override
    public Page<CustomerEntity> getAll(Pageable pageable) {
        return customerRepository.findAll(pageable);
    }

    @Override
    public Page<CustomerEntity> getAllByFirstNameContaining(String firstName, Pageable pageable) {
        return customerRepository.findAllByFirstNameContainingIgnoreCase(firstName, pageable);
    }

    @Override
    public Page<CustomerEntity> getAllByLastNameContaining(String lastName, Pageable pageable) {
        return customerRepository.findAllByLastNameContainingIgnoreCase(lastName, pageable);
    }

    @Override
    public boolean existsByEmail(String email) {
        return customerRepository.findByEmail(email).isPresent();
    }

    @Override
    public boolean existsById(Long id) {
        return customerRepository.existsById(id);
    }
}
