package com.sleepypoem.ecommerce.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR)
public class MyImageServerException extends RuntimeException {
    public MyImageServerException(String message) {
        super(message);
    }
}
