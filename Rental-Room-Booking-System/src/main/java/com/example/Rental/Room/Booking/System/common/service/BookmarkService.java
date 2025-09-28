package com.example.Rental.Room.Booking.System.common.service;

import com.example.Rental.Room.Booking.System.common.dto.ApiResponse;
import com.example.Rental.Room.Booking.System.common.entity.Bookmark;
import com.example.Rental.Room.Booking.System.common.entity.PropertyDetails;
import com.example.Rental.Room.Booking.System.common.entity.User;
import com.example.Rental.Room.Booking.System.common.repository.BookmarkRepository;
import com.example.Rental.Room.Booking.System.common.repository.PropertyRepository;
import com.example.Rental.Room.Booking.System.common.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkService {

    @Autowired
    private BookmarkRepository bookmarkRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    public ApiResponse<Bookmark> addBookmark(Long userId, Long propertyId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        PropertyDetails property = propertyRepository.findById(propertyId)
                .orElseThrow(() -> new RuntimeException("Property not found"));

        // check duplicate
        if (bookmarkRepository.findByUserAndProperty(user, property).isPresent()) {
            return new ApiResponse<>(400, "Already bookmarked", null);
        }

        Bookmark bookmark = new Bookmark();
        bookmark.setUser(user);
        bookmark.setProperty(property);

        return new ApiResponse<>(201, "Bookmark added", bookmarkRepository.save(bookmark));
    }

    public ApiResponse<List<Bookmark>> getBookmarks(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new ApiResponse<>(200, "Bookmarks fetched", bookmarkRepository.findByUser(user));
    }

    public ApiResponse<String> removeBookmark(Long userId, Long propertyId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        PropertyDetails property = propertyRepository.findById(propertyId)
                .orElseThrow(() -> new RuntimeException("Property not found"));

        bookmarkRepository.deleteByUserAndProperty(user, property);

        return new ApiResponse<>(200, "Bookmark removed", null);
    }
}

