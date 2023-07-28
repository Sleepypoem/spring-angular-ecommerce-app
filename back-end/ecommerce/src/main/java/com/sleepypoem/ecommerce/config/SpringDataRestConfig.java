package com.sleepypoem.ecommerce.config;

import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.domain.entities.OrderEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.Type;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Component
public class SpringDataRestConfig
        implements RepositoryRestConfigurer {
    @Value("${app-config.allowed-origins}")
    @SuppressWarnings("unused")
    private String[] allowedOrigins;

    EntityManager entityManager;



    public SpringDataRestConfig(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        configReadOnlyRestRepository(OrderEntity.class, config);

        cors.addMapping( "/**")
                .allowedOrigins(this.allowedOrigins)
                .allowedMethods("*")
                .allowCredentials(false).maxAge(3600);

        exposeIds(config);
    }

    private void configReadOnlyRestRepository(Class<?> clazz, RepositoryRestConfiguration config) {
        HttpMethod[] unsupportedActionsForReadOnly = {
                HttpMethod.PUT,
                HttpMethod.POST,
                HttpMethod.DELETE,
                HttpMethod.PATCH
        };
        config.getExposureConfiguration()
                .forDomainType(clazz)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedActionsForReadOnly))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedActionsForReadOnly));
    }

    private void exposeIds(RepositoryRestConfiguration config) {
        config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
                .map(Type::getJavaType)
                .toArray(Class[]::new));
    }
}