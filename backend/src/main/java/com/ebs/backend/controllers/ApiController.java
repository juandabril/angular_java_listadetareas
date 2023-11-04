package com.ebs.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") // Define la ruta base para todos los endpoints en este controlador
public class ApiController {
    @GetMapping("/data")
    public String getData() {
        // Implementa la lógica para proporcionar datos
        return "Datos desde Spring Boot";
    }
}