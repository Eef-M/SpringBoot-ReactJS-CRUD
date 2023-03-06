package com.efmkklno.dev.CRUD_App.controller;

import com.efmkklno.dev.CRUD_App.entity.Product;
import com.efmkklno.dev.CRUD_App.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping("/products/{product_id}")
    public ResponseEntity<Product> getProductById(@PathVariable("product_id") long productId) {
        Product product = productService.getProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/products")
    public ResponseEntity<?> createProduct(@RequestBody Product product) {
        productService.save(product);
        return new ResponseEntity<Product>(productService.save(product), HttpStatus.CREATED);
    }

    @DeleteMapping("/products/{product_id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("product_id") long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product Deleted Successfully", HttpStatus.OK);
    }

    @PutMapping("/products/{product_id}")
    public ResponseEntity<?> updateProduct(@PathVariable("product_id") long productId, @RequestBody Product product) {
        productService.updateProduct(productId, product);
        return new ResponseEntity<>("Product Updated Successfully", HttpStatus.OK);
    }

}
