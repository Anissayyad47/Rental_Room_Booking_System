package com.example.Rental.Room.Booking.System.common.repository;

import com.example.Rental.Room.Booking.System.common.entity.ImageUrl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyImageRepository  extends JpaRepository<ImageUrl, Long> {
}
