package com.sleepypoem.ecommerce.config;

import com.okta.spring.boot.oauth.Okta;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.accept.ContentNegotiationStrategy;
import org.springframework.web.accept.HeaderContentNegotiationStrategy;

@Configuration
@EnableWebSecurity
@Slf4j
@EnableMethodSecurity(jsr250Enabled = true)
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(authz -> authz
                        .requestMatchers("/orders/**").authenticated()
                        .requestMatchers("/okta/users/**").authenticated()
                        .anyRequest().permitAll()
                )
                .oauth2Login(Customizer.withDefaults())
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults())).csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults());

        //This line tells the client which authentication scheme to use.
        http.setSharedObject(ContentNegotiationStrategy.class, new HeaderContentNegotiationStrategy());

        Okta.configureResourceServer401ResponseBody(http);
        http.cors(Customizer.withDefaults());

        return http.build();
    }

}
