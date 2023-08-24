package com.sleepypoem.ecommerce.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(org.springframework.http.HttpStatus.NOT_FOUND)
public class MyEntityNotFoundException extends RuntimeException
{
    public MyEntityNotFoundException(String message)
    {
        super(message);
    }
}
