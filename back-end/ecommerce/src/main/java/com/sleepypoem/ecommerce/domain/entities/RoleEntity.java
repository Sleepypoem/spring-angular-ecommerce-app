package com.sleepypoem.ecommerce.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "roles")
public class RoleEntity extends EntityWithTimeStamps {

    @Id
    private Long id;

    private String name;

    private String description;

    @ManyToMany
    @JoinTable(
            name = "permissions_roles",
            joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id"))
    private Set<PermissionEntity> permissions;

    @OneToMany(mappedBy = "role")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<CustomerEntity> customers;
}
