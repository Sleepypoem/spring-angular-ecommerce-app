package com.sleepypoem.ecommerce.domain.entities;

import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class OrderEntity extends EntityWithTimeStamps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tracking_number")
    private String trackingNumber;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @Column(name = "total_quantity")
    private Integer totalQuantity;


    private String status;

    @OneToOne
    @JoinColumn(name = "billing_address_id", referencedColumnName = "id")
    private AddressEntity billingAddress;

    @OneToOne
    @JoinColumn(name = "shipping_address_id", referencedColumnName = "id")
    private AddressEntity shippingAddress;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private CustomerEntity customer;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private Set<OrderItemEntity> items;


    public void addItem(OrderItemEntity item) {
        if(item == null) {
            return;
        }

        if(this.items == null) {
            this.items = new HashSet<>();
        }

        item.setOrder(this);
        this.items.add(item);

    }

}
