package com.example.Rental.Room.Booking.System.common.dto;

import com.example.Rental.Room.Booking.System.common.enumrator.AvailableForEnum;
import com.example.Rental.Room.Booking.System.common.enumrator.FurnishingEnum;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter
public class PropertyResponseDto {
    private Long id;
    private String title;
    private String description;
    private String address;
    private FurnishingEnum.furnishing furnishing;
    private String type;
    private AvailableForEnum.availableFor availableFor;
    private String parking;
    private BigDecimal rentPrice;
    private BigDecimal securityDeposit;
    private LocalDate availableFrom;
    private String contact;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private List<String> imageUrls;  // <-- just URLs, no nested objects
}
