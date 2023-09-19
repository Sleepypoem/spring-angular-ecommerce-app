package com.sleepypoem.ecommerce.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.server.core.Relation;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "roles")
@Relation(collectionRelation = "roles", itemRelation = "role")
public class RoleEntity extends EntityWithTimeStamps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @ManyToMany(mappedBy = "roles")
    private Set<PermissionEntity> permissions = new HashSet<>();

    @OneToMany(mappedBy = "role")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<CustomerEntity> customers;

    public void addPermission(PermissionEntity permission) {
        if(permission == null) {
            return;
        }

        this.permissions.add(permission);
    }

    public void removePermission(PermissionEntity permission) {
        if(permission == null) {
            return;
        }

        this.permissions.remove(permission);
        permission.getRoles().remove(this);
    }
}
