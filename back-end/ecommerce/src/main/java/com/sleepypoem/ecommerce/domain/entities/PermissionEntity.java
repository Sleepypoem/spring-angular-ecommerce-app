package com.sleepypoem.ecommerce.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.server.core.Relation;

import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "permissions")
@Relation(collectionRelation = "permissions", itemRelation = "permission")
public class PermissionEntity extends EntityWithTimeStamps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @ManyToMany(mappedBy = "permissions")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<RoleEntity> roles = new java.util.HashSet<>();
}
