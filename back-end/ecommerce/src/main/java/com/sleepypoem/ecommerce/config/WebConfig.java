package com.sleepypoem.ecommerce.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${app-config.allowed-origins}")
    @SuppressWarnings("unused")
    private String[] allowedOrigins;


    @Override
    public void addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(this.allowedOrigins)
                .allowedMethods("*")
                .allowCredentials(false).maxAge(3600);;
    }
}
