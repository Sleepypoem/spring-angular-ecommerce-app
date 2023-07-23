package com.sleepypoem.ecommerce.service.impl;

import com.sleepypoem.ecommerce.domain.dtos.PurchaseDto;
import com.sleepypoem.ecommerce.domain.dtos.PurchaseResponseDto;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.domain.entities.OrderEntity;
import com.sleepypoem.ecommerce.domain.entities.OrderItemEntity;
import com.sleepypoem.ecommerce.enums.CheckoutStatus;
import com.sleepypoem.ecommerce.repositories.CustomerRepository;
import com.sleepypoem.ecommerce.service.interfaces.CheckoutService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private final CustomerRepository customerRepository;


    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponseDto makeOrder(PurchaseDto purchaseDto) {
        CustomerEntity customerEntity;

        if(customerExists(purchaseDto.getCustomer().getEmail())){
            customerEntity = getCustomerByEmail(purchaseDto.getCustomer().getEmail());
        } else {
            customerEntity = purchaseDto.getCustomer();
        }

        OrderEntity orderEntity = prepareOrder(purchaseDto);

        customerEntity.addOrder(orderEntity);
        customerRepository.save(customerEntity);
        return new PurchaseResponseDto(orderEntity.getOrderTrackingNumber(), orderEntity.getStatus());
    }

    private OrderEntity prepareOrder(PurchaseDto purchaseDto) {
        OrderEntity orderEntity = purchaseDto.getOrder();
        Set<OrderItemEntity> orderEntities = orderEntity.getItems();
        orderEntities.forEach(item -> item.setOrder(orderEntity));
        orderEntity.setOrderTrackingNumber(generateTrackingNumber());
        orderEntity.setStatus(CheckoutStatus.PENDING);
        return orderEntity;
    }

    public CustomerEntity getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email).orElseThrow(RuntimeException::new);
    }

    private boolean customerExists(String customerEmail) {
        return customerRepository.findByEmail(customerEmail).isPresent();
    }

    private String generateTrackingNumber() {
        String timestamp = Long.toString(System.currentTimeMillis());
        return UUID.randomUUID() + "-" + timestamp;
    }
}
