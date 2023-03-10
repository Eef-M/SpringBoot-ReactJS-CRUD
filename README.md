# SpringBoot-ReactJS-CRUD
This is an CRUD project for a web application built with Spring Boot and ReactJS, using a MySQL database managed by XAMPP.

## Requirements
* Java 17
* NodeJs and npm
* XAMPP with MySQL

## Installation
1. Clone the repository
   ```sh
   git clone https://github.com/Eef-M/SpringBoot-ReactJS-CRUD.git
   ```
   
2. Import the database schema
   * Launch XAMPP and start the Apache and MySQL services
   * Open phpMyAdmin in your browser (usually at http://localhost/phpmyadmin/)
   * Create a new database called `**db_product**`
   * Import the `**db_product.sql**` file located in the `**database**` directory of this project
   
3. Run the Spring Boot application
   ```sh
   cd springboot-react-mysql
   ./mvnw spring-boot:run
   ```
   or you can also run it via Intellij IDEA
   
4. Run the ReactJS application
   ```sh
   cd client
   npm install
   npm start
   ```
   
5. Open the application in your browser
    * The Spring Boot application should be running at http://localhost:8080/
    * The ReactJS application should be running at http://localhost:3000/
    
## Technologies Used
* Spring Boot 3
* ReactJS
* MySQL
* XAMPP

By Eef Mekelliano
Thanks!
