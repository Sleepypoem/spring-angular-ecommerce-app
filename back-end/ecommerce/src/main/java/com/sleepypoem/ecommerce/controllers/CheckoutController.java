package com.sleepypoem.ecommerce.controllers;

import com.sleepypoem.ecommerce.domain.dtos.PurchaseDto;
import com.sleepypoem.ecommerce.domain.dtos.PurchaseResponseDto;
import com.sleepypoem.ecommerce.service.impl.CheckoutServiceImpl;
import com.sleepypoem.ecommerce.service.interfaces.CheckoutService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/checkout")
@CrossOrigin(origins = "http://localhost:4200")
public class CheckoutController {

    private final CheckoutService checkoutService;


    public CheckoutController(CheckoutServiceImpl checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponseDto makeOrder(@RequestBody PurchaseDto purchaseDto) {
        return checkoutService.makeOrder(purchaseDto);
    }
}
