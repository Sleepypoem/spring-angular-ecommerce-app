package com.sleepypoem.ecommerce.domain.dtos;

import lombok.Data;

@Data
public class PaymentInfoDto {

    private int amount;

    private String currency;
}
