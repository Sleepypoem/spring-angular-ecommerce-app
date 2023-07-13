package com.sleepypoem.ecommerce.domain.dtos;

import com.sleepypoem.ecommerce.enums.CheckoutStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PurchaseResponseDto {

    private String orderTrackingNumber;

    private CheckoutStatus status;
}
