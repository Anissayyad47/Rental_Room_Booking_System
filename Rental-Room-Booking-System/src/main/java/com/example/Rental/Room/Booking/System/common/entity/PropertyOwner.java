package com.example.Rental.Room.Booking.System.common.entity;

import com.example.Rental.Room.Booking.System.common.enumrator.AuthProvider;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@Table(name = "property_owner")
public class PropertyOwner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private AuthProvider.authProvider provider;

    @Column(name ="provider_id" )
    private String providerId;
    private String role;

}
