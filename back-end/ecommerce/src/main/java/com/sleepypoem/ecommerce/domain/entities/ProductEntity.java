package com.sleepypoem.ecommerce.domain.entities;

import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "products")
public class ProductEntity extends EntityWithTimeStamps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sku;

    private String name;

    private String description;

    private String image;

    private BigDecimal price;

    private Integer stock;

    private Boolean active;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryEntity category;

}
