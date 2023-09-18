package com.sleepypoem.ecommerce.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "permissions")
public class PermissionEntity extends EntityWithTimeStamps {

    @Id
    private Long id;

    private String name;

    private String description;

    @ManyToMany(mappedBy = "permissions")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<RoleEntity> roles;
}
