package com.sleepypoem.ecommerce.service.interfaces;

import com.sleepypoem.ecommerce.domain.dtos.PaymentInfoDto;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface StripeService {

    PaymentIntent createPaymentIntent(PaymentInfoDto paymentInfoDto) throws StripeException;
}
