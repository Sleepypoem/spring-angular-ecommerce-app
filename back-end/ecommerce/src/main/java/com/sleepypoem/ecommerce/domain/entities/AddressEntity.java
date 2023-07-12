package com.sleepypoem.ecommerce.domain.entities;

import com.sleepypoem.ecommerce.domain.entities.abstracts.EntityWithTimeStamps;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "addresses")
public class AddressEntity extends EntityWithTimeStamps {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String street;


    private String city;


    private String state;

    @Column(name = "zip_code")
    private String zipCode;


    private String country;
}
