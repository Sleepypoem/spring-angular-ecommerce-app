package com.sleepypoem.ecommerce.service.impl;

import com.sleepypoem.ecommerce.config.StripeConfig;
import com.sleepypoem.ecommerce.domain.dtos.PaymentInfoDto;
import com.sleepypoem.ecommerce.service.interfaces.StripeService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class StripeServiceImpl implements StripeService {

    private final StripeConfig stripeConfig;

    public StripeServiceImpl(StripeConfig stripeConfig) {
        this.stripeConfig = stripeConfig;
        Stripe.apiKey = stripeConfig.getSecretKey();
    }

    @Override
    public PaymentIntent createPaymentIntent(PaymentInfoDto paymentInfoDto) throws StripeException {
        List<String> paymentMethodTypes = new ArrayList<>();
        paymentMethodTypes.add("card");
        return PaymentIntent.create(
                Map.of(
                        "amount", paymentInfoDto.getAmount(),
                        "currency", paymentInfoDto.getCurrency(),
                        "payment_method_types", paymentMethodTypes
                )
        );
    }
}
