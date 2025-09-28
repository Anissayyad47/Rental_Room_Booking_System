package com.example.Rental.Room.Booking.System.common.contoller;

import com.example.Rental.Room.Booking.System.common.dto.ApiResponse;
import com.example.Rental.Room.Booking.System.common.entity.Bookmark;
import com.example.Rental.Room.Booking.System.common.service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookmarks")
public class BookmarkController {

    @Autowired
    private BookmarkService bookmarkService;

    @PostMapping("/{userId}/{propertyId}")
    public ResponseEntity<ApiResponse<Bookmark>> addBookmark(@PathVariable Long userId, @PathVariable Long propertyId) {
        return ResponseEntity.ok(bookmarkService.addBookmark(userId, propertyId));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponse<List<Bookmark>>> getBookmarks(@PathVariable Long userId) {
        return ResponseEntity.ok(bookmarkService.getBookmarks(userId));
    }

    @DeleteMapping("/{userId}/{propertyId}")
    public ResponseEntity<ApiResponse<String>> removeBookmark(@PathVariable Long userId, @PathVariable Long propertyId) {
        return ResponseEntity.ok(bookmarkService.removeBookmark(userId, propertyId));
    }
}
