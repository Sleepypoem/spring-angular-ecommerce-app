package com.sleepypoem.ecommerce.domain.dtos;

import lombok.Data;

@Data
public class PasswordChangeRequestDto {

    private String customerId;

    private String oldPassword;

    private String newPassword;
}
