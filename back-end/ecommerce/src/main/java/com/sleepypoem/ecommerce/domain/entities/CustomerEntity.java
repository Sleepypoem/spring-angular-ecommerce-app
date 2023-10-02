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
@Table(name = "customers")
@Relation(collectionRelation = "customers", itemRelation = "customer")
public class CustomerEntity extends EntityWithTimeStamps {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    private String email;

    private String phone;

    private String image;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<OrderEntity> orders = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id", nullable = false)
    private RoleEntity role;

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String encodedImage;

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    public void addOrder(OrderEntity order) {
        if (order == null) {
            return;
        }

        order.setCustomer(this);
        this.orders.add(order);
    }

    public void addRole(RoleEntity role) {
        if (role == null) {
            return;
        }

        this.role = role;
    }

}
