package com.efmkklno.dev.CRUD_App.repository;

import com.efmkklno.dev.CRUD_App.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
