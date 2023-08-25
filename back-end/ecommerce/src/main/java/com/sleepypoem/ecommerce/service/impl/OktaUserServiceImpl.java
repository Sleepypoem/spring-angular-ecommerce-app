package com.sleepypoem.ecommerce.service.impl;

import com.okta.sdk.resource.api.UserApi;
import com.okta.sdk.resource.client.ApiClient;
import com.okta.sdk.resource.model.ChangePasswordRequest;
import com.okta.sdk.resource.model.PasswordCredential;
import com.okta.sdk.resource.model.User;
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
        if (customerEntity.getPassword() != null) {
            createUserWithCredentials(customerEntity.getEmail(), customerEntity.getPassword());
        } else {
            createUserWithoutCredentials(customerEntity.getEmail());
        }
        return customerEntity;
    }

    private void createUserWithCredentials(String email, String password) {
        UserBuilder.instance()
                .setEmail(email)
                .setPassword(password.toCharArray())
                .setCustomProfileProperty("assigned_role", "user")
                .setActive(true)
                .buildAndCreate(userApi);
    }

    private void createUserWithoutCredentials(String email) {
        UserBuilder.instance()
                .setEmail(email)
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
    public void changePassword(String customerId, String oldPassword, String newPassword) {
        User user = getOktaUser(customerId);
        ChangePasswordRequest changePasswordRequest = new ChangePasswordRequest();
        PasswordCredential passwordCredentialOld = new PasswordCredential();
        passwordCredentialOld.setValue(oldPassword);
        changePasswordRequest.setOldPassword(passwordCredentialOld);
        PasswordCredential passwordCredentialNew = new PasswordCredential();
        passwordCredentialNew.setValue(newPassword);
        changePasswordRequest.setNewPassword(passwordCredentialNew);
        userApi.changePassword(user.getId(), changePasswordRequest, true);
    }

    @Override
    public void deleteOktaUser(String email) {
        userApi.deactivateUser(email, false);
        userApi.deleteUser(email, false);
    }
}
