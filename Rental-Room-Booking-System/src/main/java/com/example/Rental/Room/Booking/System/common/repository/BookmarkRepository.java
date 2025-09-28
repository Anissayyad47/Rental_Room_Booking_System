package com.example.Rental.Room.Booking.System.common.repository;

import com.example.Rental.Room.Booking.System.common.entity.Bookmark;
import com.example.Rental.Room.Booking.System.common.entity.PropertyDetails;
import com.example.Rental.Room.Booking.System.common.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findByUser(User user);
    Optional<Bookmark> findByUserAndProperty(User user, PropertyDetails property);
    void deleteByUserAndProperty(User user, PropertyDetails property);
}

