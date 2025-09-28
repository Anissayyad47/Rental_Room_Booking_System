package com.example.Rental.Room.Booking.System.common.service;


import com.example.Rental.Room.Booking.System.common.dto.PropertyResponseDto;
import com.example.Rental.Room.Booking.System.common.entity.ImageUrl;
import com.example.Rental.Room.Booking.System.common.entity.PropertyDetails;
import com.example.Rental.Room.Booking.System.common.entity.PropertyDetailsDto;
import com.example.Rental.Room.Booking.System.common.entity.PropertyOwner;
import com.example.Rental.Room.Booking.System.common.repository.PropertyOnwerRepository;
import com.example.Rental.Room.Booking.System.common.repository.PropertyRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private PropertyOnwerRepository propertyOwnerRepository;

    @Autowired
    private S3Service s3Service; // inject S3 upload service

    @Transactional
    public PropertyDetails createProperty(PropertyDetailsDto dto, MultipartFile[] images) throws Exception {
        // 1. Find owner
        PropertyOwner owner = propertyOwnerRepository.findById(dto.getOwnerId())
                .orElseThrow(() -> new RuntimeException("Owner not found"));

        // 2. Create Property entity
        PropertyDetails property = new PropertyDetails();
        property.setOwner(owner);
        property.setTitle(dto.getTitle());
        property.setDescription(dto.getDescription());
        property.setAddress(dto.getAddress());
        property.setFurnishing(dto.getFurnishing());
        property.setType(dto.getType());
        property.setAvailableFor(dto.getAvailableFor());
        property.setParking(dto.getParking());
        property.setRentPrice(dto.getRentPrice());
        property.setSecurityDeposit(dto.getSecurityDeposit());
        property.setAvailableFrom(dto.getAvailableFrom());
        property.setContact(dto.getContact());
        property.setLatitude(dto.getLatitude());
        property.setLongitude(dto.getLongitude());

        // 3. Upload each image to S3 and create ImageUrl entity
        List<ImageUrl> imageEntities = new ArrayList<>();
        for (MultipartFile image : images) {
            String imageUrl = s3Service.uploadFile(image); // upload to S3
            ImageUrl imageEntity = new ImageUrl();
            imageEntity.setImageUrl(imageUrl);
            imageEntity.setProperty(property);
            imageEntities.add(imageEntity);
        }

        property.setImages(imageEntities);

        // 4. Save property (cascade saves images too)
        return propertyRepository.save(property);
    }

    public List<PropertyResponseDto> getAllProperties() {
        return propertyRepository.findAll().stream().map(property -> {
            PropertyResponseDto dto = new PropertyResponseDto();
            dto.setId(property.getId());
            dto.setTitle(property.getTitle());
            dto.setDescription(property.getDescription());
            dto.setAddress(property.getAddress());
            dto.setFurnishing(property.getFurnishing());
            dto.setType(property.getType());
            dto.setAvailableFor(property.getAvailableFor());
            dto.setParking(property.getParking());
            dto.setRentPrice(property.getRentPrice());
            dto.setSecurityDeposit(property.getSecurityDeposit());
            dto.setAvailableFrom(property.getAvailableFrom());
            dto.setContact(property.getContact());
            dto.setLatitude(property.getLatitude());
            dto.setLongitude(property.getLongitude());
            dto.setImageUrls(property.getImages().stream().map(ImageUrl::getImageUrl).toList());
            return dto;
        }).toList();
    }
}
