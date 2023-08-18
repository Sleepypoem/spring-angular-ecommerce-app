package com.sleepypoem.ecommerce.controllers;

import com.sleepypoem.ecommerce.controllers.asemblers.ProductAssembler;
import com.sleepypoem.ecommerce.domain.entities.ProductEntity;
import com.sleepypoem.ecommerce.service.interfaces.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    private final PagedResourcesAssembler<ProductEntity> pagedResourcesAssembler;

    private final ProductAssembler productAssembler;

    public ProductController(ProductService productService, PagedResourcesAssembler<ProductEntity> pagedResourcesAssembler, ProductAssembler productAssembler) {
        this.productService = productService;
        this.pagedResourcesAssembler = pagedResourcesAssembler;
        this.productAssembler = productAssembler;
    }

    @GetMapping
    public PagedModel<EntityModel<ProductEntity>> all(@PageableDefault(page = 0, size = 10)Pageable pageable) {
        Page<ProductEntity> products = productService.findAll(pageable);
        return pagedResourcesAssembler.toModel(products, productAssembler);
    }

    @GetMapping("/{id}")
    public EntityModel<ProductEntity> one(@PathVariable Long id) {
        ProductEntity product = productService.findById(id);
        return productAssembler.toModel(product);
    }

    @GetMapping("/search/findAllByCategoryId")
    public CollectionModel<EntityModel<ProductEntity>> allByCategoryId(@RequestParam Long id, @PageableDefault(page = 0, size = 10) Pageable pageable) {
        Page<ProductEntity> products = productService.findAllByCategoryId(id, pageable);
        return pagedResourcesAssembler.toModel(products, productAssembler);
    }

    @GetMapping("/search/findAllByNameContaining")
    public CollectionModel<EntityModel<ProductEntity>> allByNameContaining(@RequestParam String name, @PageableDefault(page = 0, size = 10) Pageable pageable) {
        Page<ProductEntity> products = productService.findByNameContaining(name, pageable);
        return pagedResourcesAssembler.toModel(products, productAssembler);
    }


    @PostMapping
    public EntityModel<ProductEntity> newProduct(@RequestBody ProductEntity product) {
        ProductEntity savedProduct = productService.save(product);
        return productAssembler.toModel(savedProduct);
    }


    @PutMapping("/{id}")
    public EntityModel<ProductEntity> updateProduct(@RequestBody ProductEntity product, @PathVariable Long id) {
        ProductEntity updatedProduct = productService.update(id, product);
        return productAssembler.toModel(updatedProduct);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = org.springframework.http.HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteById(id);
    }
}
