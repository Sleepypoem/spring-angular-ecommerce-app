package com.sleepypoem.ecommerce.domain.entities;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductEntityTest {

    @Test
    @DisplayName("Test timestamps are not null")
    void testTimestampsAreNotNull() {
        ProductEntity productEntity = new ProductEntity();
        assertNotNull(productEntity.getCreatedAt());
        assertNotNull(productEntity.getUpdatedAt());
    }

}