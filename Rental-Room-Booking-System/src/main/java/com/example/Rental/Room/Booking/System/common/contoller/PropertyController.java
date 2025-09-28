package com.example.Rental.Room.Booking.System.common.contoller;

import com.example.Rental.Room.Booking.System.common.dto.PropertyResponseDto;
import com.example.Rental.Room.Booking.System.common.entity.PropertyDetails;
import com.example.Rental.Room.Booking.System.common.entity.PropertyDetailsDto;
import com.example.Rental.Room.Booking.System.common.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/property")
@CrossOrigin
public class PropertyController {
    @Autowired
    PropertyService propertyService;

//    @PostMapping("/upload")
//    public String uploadProperty(@RequestBody PropertyDetails propertyDetails){
//        return propertyService.uploadProperty(propertyDetails);
//    }

//    @GetMapping("/get")
//    public List<PropertyDetails> getAllProperties(){
//        return propertyService.getAllProperties();
//    }

//    @PostMapping("/upload")
//    public ResponseEntity<PropertyDetails> createProperty(@RequestBody PropertyDetailsDto dto) {
//        PropertyDetails savedProperty = propertyService.createProperty(dto);
//        return ResponseEntity.ok(savedProperty);
//    }
//
    // Get property by ID
    @GetMapping("/get")
    public List<PropertyResponseDto> getProperty() {
        return propertyService.getAllProperties();
    }

//    @GetMapping("/get")
//    public String getAllProperties(){
//        return "hello from spring boot";
//    }

    @PostMapping("/upload")
    public ResponseEntity<PropertyDetails> createProperty(
            @RequestPart("property") PropertyDetailsDto propertyDto,
            @RequestPart("images") MultipartFile[] images) throws Exception {

        PropertyDetails savedProperty = propertyService.createProperty(propertyDto, images);
        return ResponseEntity.ok(savedProperty);
    }
}
