package com.efmkklno.dev.CRUD_App.service;

import com.efmkklno.dev.CRUD_App.entity.Product;

import java.util.List;

public interface ProductService {
    Product save(Product product);
    List<Product> getProducts();
    Product getProductById(long productId);
    void deleteProduct(long productId);
    void updateProduct(long productId, Product product);
}
