package com.example.Rental.Room.Booking.System.common.entity;


import com.example.Rental.Room.Booking.System.common.enumrator.AuthProvider;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(length = 255)
    private String password; // nullable for Google login

    @Enumerated(EnumType.STRING)
    private AuthProvider.authProvider provider;

    @Column(name = "provider_id", length = 255)
    private String providerId;

    @Column(length = 20)
    private String role = "USER";

//    @Column(name = "created_at", updatable = false)
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    @Column(name = "updated_at")
//    private LocalDateTime updatedAt = LocalDateTime.now();
//
//    // Optional: PrePersist & PreUpdate to handle timestamps automatically
//    @PrePersist
//    protected void onCreate() {
//        createdAt = LocalDateTime.now();
//        updatedAt = LocalDateTime.now();
//    }
//
//    @PreUpdate
//    protected void onUpdate() {
//        updatedAt = LocalDateTime.now();
//    }
}
