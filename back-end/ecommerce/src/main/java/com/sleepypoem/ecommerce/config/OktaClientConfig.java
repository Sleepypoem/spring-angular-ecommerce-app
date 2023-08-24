package com.sleepypoem.ecommerce.config;

import com.okta.sdk.authc.credentials.TokenClientCredentials;
import com.okta.sdk.client.Clients;
import com.okta.sdk.resource.client.ApiClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OktaClientConfig {

    @Value("${okta.client.token}")
    private String apiToken;


    @Value("${okta.client.orgUrl}")
    private String orgUrl;

    @Bean
    public ApiClient apiClient() {
        return Clients.builder()
                .setOrgUrl(orgUrl)
                .setClientCredentials(new TokenClientCredentials(apiToken))
                .build();
    }
}
