package com.sleepypoem.ecommerce.service.impl;

import com.okta.sdk.resource.api.UserApi;
import com.okta.sdk.resource.client.ApiClient;
import com.okta.sdk.resource.model.*;
import com.okta.sdk.resource.user.UserBuilder;
import com.sleepypoem.ecommerce.domain.entities.CustomerEntity;
import com.sleepypoem.ecommerce.service.interfaces.OktaUserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OktaUserServiceImpl implements OktaUserService {
    private final UserApi userApi;

    public OktaUserServiceImpl(ApiClient client) {
        userApi = new UserApi(client);
    }

    public static final String ROLE_KEY = "assigned_role";

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
                .setCustomProfileProperty(ROLE_KEY, "user")
                .setActive(true)
                .buildAndCreate(userApi);
    }

    private void createUserWithoutCredentials(String email) {
        UserBuilder.instance()
                .setEmail(email)
                .setActive(true)
                .setCustomProfileProperty(ROLE_KEY, "user")
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
    public void setUserRole(String id, String roleName) {
        User user = userApi.getUser(id);
        UpdateUserRequest updateUserRequest = new UpdateUserRequest();
        UserProfile userProfile = new UserProfile();
        userProfile.setAdditionalProperties(Map.of(ROLE_KEY, roleName));
        updateUserRequest.setProfile(userProfile);
        userApi.updateUser(user.getId(), updateUserRequest, true);
    }

    @Override
    public void deleteOktaUser(String email) {
        userApi.deactivateUser(email, false);
        userApi.deleteUser(email, false);
    }
}
