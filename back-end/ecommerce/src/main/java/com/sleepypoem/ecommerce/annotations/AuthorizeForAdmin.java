package com.sleepypoem.ecommerce.annotations;

import org.springframework.security.access.prepost.PreAuthorize;

import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("authentication.getToken().getClaim('role').contains('admin')")
public @interface AuthorizeForAdmin {

}
