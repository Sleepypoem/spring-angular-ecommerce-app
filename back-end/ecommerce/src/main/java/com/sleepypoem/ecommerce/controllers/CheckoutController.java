package com.sleepypoem.ecommerce.controllers;

import com.sleepypoem.ecommerce.domain.dtos.PaymentInfoDto;
import com.sleepypoem.ecommerce.domain.dtos.PurchaseDto;
import com.sleepypoem.ecommerce.domain.dtos.PurchaseResponseDto;
import com.sleepypoem.ecommerce.service.impl.CheckoutServiceImpl;
import com.sleepypoem.ecommerce.service.interfaces.CheckoutService;
import com.sleepypoem.ecommerce.service.interfaces.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/checkout")
public class CheckoutController {

    private final CheckoutService checkoutService;

    private final StripeService stripeService;


    public CheckoutController(CheckoutServiceImpl checkoutService, StripeService stripeService) {
        this.checkoutService = checkoutService;
        this.stripeService = stripeService;
    }

    @PostMapping("/purchase")
    public PurchaseResponseDto makeOrder(@RequestBody PurchaseDto purchaseDto) {
        return checkoutService.makeOrder(purchaseDto);
    }

    @PostMapping("/payment-intent")
    public ResponseEntity<String> createPaymentEntity(@RequestBody PaymentInfoDto paymentInfoDto) throws StripeException {
        return ResponseEntity.ok(stripeService.createPaymentIntent(paymentInfoDto).toJson());
    }
}
