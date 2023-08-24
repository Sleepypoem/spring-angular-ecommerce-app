package com.sleepypoem.ecommerce.service.impl;

import com.sleepypoem.ecommerce.domain.entities.ProductEntity;
import com.sleepypoem.ecommerce.exceptions.MyEntityNotFoundException;
import com.sleepypoem.ecommerce.repositories.ProductRepository;
import com.sleepypoem.ecommerce.service.interfaces.ImageService;
import com.sleepypoem.ecommerce.service.interfaces.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    private final ImageService imageService;

    private static final String IMAGE_FOLDER = "spring-angular-ecommerce/assets/images/products/";


    public ProductServiceImpl(ProductRepository productRepository, ImageService imageService) {
        this.productRepository = productRepository;
        this.imageService = imageService;
    }
    @Override
    @Transactional
    public ProductEntity save(ProductEntity product) {
        if(product.getEncodedImage() == null){
            product.setImage(imageService.getPlaceholderImage());
        }else {
            product.setImage(imageService.addImageToFolder(product.getEncodedImage(), IMAGE_FOLDER + product.getCategory().getName()));
        }
        return productRepository.save(product);
    }

    @Override
    public ProductEntity findById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new MyEntityNotFoundException("Product not found"));
    }

    @Override
    public ProductEntity update(Long id, ProductEntity product) {
        if(!Objects.equals(id, product.getId())){
            throw new RuntimeException("Id not match with product id: " + id);
        }
        if(product.getEncodedImage() != null){
            product.setImage(imageService.addImageToFolder(product.getEncodedImage(), IMAGE_FOLDER + product.getCategory().getName().toLowerCase()));
        }
        return productRepository.save(product);
    }

    @Override
    public void delete(ProductEntity product) {
        productRepository.delete(product);
    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public Page<ProductEntity> findAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Page<ProductEntity> findAllByCategoryId(Long categoryId, Pageable pageable) {
        return productRepository.findAllByCategoryId(categoryId, pageable);
    }

    @Override
    public Page<ProductEntity> findByNameContaining(String name, Pageable pageable) {
        return productRepository.findByNameContaining(name, pageable);
    }

}
