package com.sleepypoem.ecommerce.config;

import com.okta.sdk.resource.client.ApiException;
import com.sleepypoem.ecommerce.exceptions.MyBadRequestException;
import com.sleepypoem.ecommerce.exceptions.MyEntityNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ApiException.class)
    public ResponseEntity<Object> handleApiException(ApiException e, WebRequest request) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return handleExceptionInternal(e, e.getResponseBody(), headers, HttpStatusCode.valueOf(e.getCode()), request);
    }

    @ExceptionHandler(MyEntityNotFoundException.class)
    public ResponseEntity<Object> handleMyEntityNotFoundException(MyEntityNotFoundException e, WebRequest request) {
        HttpHeaders headers = new HttpHeaders();
        String message = "{ \"error_message\": \"" + e.getMessage() + "\" }";
        headers.setContentType(MediaType.APPLICATION_JSON);
        return handleExceptionInternal(e, message, headers, HttpStatusCode.valueOf(404), request);
    }

    @ExceptionHandler(MyBadRequestException.class)
    public ResponseEntity<Object> handleMyBadRequestException(MyBadRequestException e, WebRequest request) {
        HttpHeaders headers = new HttpHeaders();
        String message = "{ \"error_message\": \"" + e.getMessage() + "\" }";
        headers.setContentType(MediaType.APPLICATION_JSON);
        return handleExceptionInternal(e, message, headers, HttpStatusCode.valueOf(400), request);
    }
}
