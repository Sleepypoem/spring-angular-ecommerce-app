package com.sleepypoem.ecommerce.service.interfaces;

import com.okta.sdk.resource.model.User;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;

import java.util.List;

public interface OktaUserService {

    CustomerEntity createOktaUser(CustomerEntity customerEntity);

    User getOktaUser(String email);

    List<User> getAllOktaUsers();

    void deleteOktaUser(String email);
}
