package com.sleepypoem.ecommerce.domain.entities.abstracts;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
public class EntityWithTimeStamps {

    @Column(name = "created_at")
    protected Date createdAt;

    @Column(name = "updated_at")
    protected Date updatedAt;

    protected EntityWithTimeStamps() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
