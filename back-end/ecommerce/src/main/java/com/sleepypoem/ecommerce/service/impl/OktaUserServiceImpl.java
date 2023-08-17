package com.sleepypoem.ecommerce.service.impl;

import com.okta.sdk.resource.api.UserApi;
import com.okta.sdk.resource.client.ApiClient;
import com.okta.sdk.resource.model.UpdateUserRequest;
import com.okta.sdk.resource.model.User;
import com.okta.sdk.resource.model.UserProfile;
import com.okta.sdk.resource.user.UserBuilder;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.service.interfaces.OktaUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OktaUserServiceImpl implements OktaUserService {
    private final UserApi userApi;
    public OktaUserServiceImpl(ApiClient client) {
        userApi = new UserApi(client);
    }

    @Override
    public CustomerEntity createOktaUser(CustomerEntity customerEntity) {
        if(customerEntity.getPassword() != null){
            createUserWithCredentials(customerEntity.getEmail(), customerEntity.getFirstName(), customerEntity.getLastName(), customerEntity.getPassword());
        }else{
            createUserWithoutCredentials(customerEntity.getEmail(), customerEntity.getFirstName(), customerEntity.getLastName());
        }
        return customerEntity;
    }

    private void createUserWithCredentials(String email, String firstName, String lastName, String password) {
        UserBuilder.instance()
                .setEmail(email)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setPassword(password.toCharArray())
                .setCustomProfileProperty("assigned_role", "user")
                .setActive(true)
                .buildAndCreate(userApi);
    }

    private void createUserWithoutCredentials(String email, String firstName, String lastName) {
        UserBuilder.instance()
                .setEmail(email)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setActive(true)
                .setCustomProfileProperty("assigned_role", "user")
                .buildAndCreate(userApi);
    }

    @Override
    public User getOktaUser(String email) {
        return userApi.getUser(email);
    }

    @Override
    public List<User> getAllOktaUsers() {
        return userApi.listUsers(null, null, 10, null, null, null, null);
    }

    @Override
    public CustomerEntity updateOktaUser(String id, CustomerEntity customerEntity) {
        User user = userApi.getUser(id);
        UpdateUserRequest updateUserRequest = new UpdateUserRequest();
        UserProfile userProfile = new UserProfile();
        userProfile.setFirstName(customerEntity.getFirstName());
        userProfile.setLastName(customerEntity.getLastName());
        updateUserRequest.setProfile(userProfile);
        userApi.updateUser(user.getId(), updateUserRequest, true);
        return null;
    }

    @Override
    public void deleteOktaUser(String email) {
        userApi.deactivateUser(email, false);
        userApi.deleteUser(email, false);
    }
}
