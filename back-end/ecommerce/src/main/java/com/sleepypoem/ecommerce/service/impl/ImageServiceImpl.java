package com.sleepypoem.ecommerce.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.sleepypoem.ecommerce.config.CloudinaryConfig;
import com.sleepypoem.ecommerce.exceptions.MyImageServerException;
import com.sleepypoem.ecommerce.service.interfaces.ImageService;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class ImageServiceImpl implements ImageService {

    private final CloudinaryConfig cloudinaryConfig;

    private final Cloudinary cloudinary;

    public ImageServiceImpl(CloudinaryConfig cloudinaryConfig) {
        this.cloudinaryConfig = cloudinaryConfig;
        cloudinary = new Cloudinary(cloudinaryConfig.getCloudinaryUrl());
    }

    @Override
    public String addImageToFolder(String image, String folder) {
        Map params1 = ObjectUtils.asMap(
                "unique_filename", true,
                "overwrite", true,
                "secure", false,
                "folder", folder
        );

        try {
            Map res = cloudinary.uploader().upload(image, params1);
            return res.get("public_id").toString();
        } catch (IOException e) {
            throw  new MyImageServerException("Error saving image to image server. Error: " + e.getMessage());
        }
    }

    public List<String> getImagesFromFolder(String folderPath) throws Exception {
        List<String> imageNames = new ArrayList<>();
        Map params1 = ObjectUtils.asMap(
                "cloud_name", cloudinaryConfig.getCloudName(),
                "api_key", cloudinaryConfig.getApiKey(),
                "api_secret", cloudinaryConfig.getApiSecret(),
                "secure", true,
                "type", "upload",
                "prefix", folderPath
        );

        Map<String, Object> response = cloudinary.api().resources(params1);
        for (Map.Entry<String, Object> entry : response.entrySet()) {
            if(entry.getValue() instanceof ArrayList<?>) {
                var imgList = (ArrayList<HashMap>) entry.getValue();
                for (HashMap<String, Object> img: imgList
                ) {
                    imageNames.add(img.get("public_id").toString());
                }
            }
        }
        return imageNames;
    }

    @Override
    public boolean deleteImage(String imageName) {
        try {
            cloudinary.api().deleteResources(Collections.singletonList(imageName),
                    ObjectUtils.asMap("type", "upload", "resource_type", "image"));
            return true;
        } catch (Exception exception) {
            return false;
        }

    }
}
