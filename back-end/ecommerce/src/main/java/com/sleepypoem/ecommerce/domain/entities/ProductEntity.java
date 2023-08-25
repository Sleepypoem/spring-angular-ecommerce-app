package com.sleepypoem.ecommerce.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.server.core.Relation;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@Table(name = "products")
@Relation(collectionRelation = "products", itemRelation = "product")
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

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String encodedImage;
}
