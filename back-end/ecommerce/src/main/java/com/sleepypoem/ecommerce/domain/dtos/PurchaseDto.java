package com.sleepypoem.ecommerce.domain.dtos;

import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.domain.entities.OrderEntity;
import lombok.Data;

@Data
public class PurchaseDto {

    private CustomerEntity customer;

    private OrderEntity order;
}
