package com.sleepypoem.ecommerce.service.interfaces;

import com.sleepypoem.ecommerce.domain.dtos.PurchaseDto;
import com.sleepypoem.ecommerce.domain.dtos.PurchaseResponseDto;

public interface CheckoutService {

    PurchaseResponseDto makeOrder(PurchaseDto purchaseDto);
}
