package com.sleepypoem.ecommerce.domain.entities;

import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "customers")
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


    public void addOrder(OrderEntity order) {
        if(order == null) {
            return;
        }

        if(this.orders == null) {
            this.orders = new HashSet<>();
        }

        order.setCustomer(this);
        this.orders.add(order);
    }
}
