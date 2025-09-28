package com.example.Rental.Room.Booking.System.common.repository;

import com.example.Rental.Room.Booking.System.common.entity.PropertyOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PropertyOnwerRepository extends JpaRepository<PropertyOwner,Long> {
    Optional<PropertyOwner> findByEmail(String email);
}
