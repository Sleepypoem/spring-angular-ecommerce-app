package com.sleepypoem.ecommerce.service.impl;

import com.sleepypoem.ecommerce.domain.dtos.PurchaseDto;
import com.sleepypoem.ecommerce.domain.dtos.PurchaseResponseDto;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.domain.entities.OrderEntity;
import com.sleepypoem.ecommerce.domain.entities.OrderItemEntity;
import com.sleepypoem.ecommerce.enums.CheckoutStatus;
import com.sleepypoem.ecommerce.service.interfaces.CheckoutService;
import com.sleepypoem.ecommerce.service.interfaces.CustomerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private final CustomerService customerService;


    public CheckoutServiceImpl(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Override
    @Transactional
    public PurchaseResponseDto makeOrder(PurchaseDto purchaseDto) {
        CustomerEntity customerEntity = getIfExists(purchaseDto);
        OrderEntity orderEntity = prepareOrder(purchaseDto);

        customerEntity.addOrder(orderEntity);

        if(customerEntity.getId() == null){
            customerService.create(customerEntity);
        }else {
            customerService.update(customerEntity.getId(), customerEntity);
        }
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
        return customerService.getByEmail(email);
    }

    private boolean customerExists(String customerEmail) {
        return customerService.existsByEmail(customerEmail);
    }

    private CustomerEntity getIfExists(PurchaseDto purchaseDto) {
        if(customerExists(purchaseDto.getCustomer().getEmail())){
            return getCustomerByEmail(purchaseDto.getCustomer().getEmail());
        } else {
            return purchaseDto.getCustomer();
        }
    }

    private String generateTrackingNumber() {
        String timestamp = Long.toString(System.currentTimeMillis());
        return UUID.randomUUID() + "-" + timestamp;
    }
}
