package com.sleepypoem.ecommerce.service.interfaces;

public interface ImageService {

    String addImageToFolder(String image, String folder);

    boolean deleteImage(String imageName);

    default String getPlaceholderImage() {
        return "spring-angular-ecommerce/assets/images/vyspi9t7uokt16nsym91";
    }
}
