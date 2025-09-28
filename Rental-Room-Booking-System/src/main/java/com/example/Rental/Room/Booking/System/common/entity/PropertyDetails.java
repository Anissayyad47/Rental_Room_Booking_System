package com.example.Rental.Room.Booking.System.common.entity;

import com.example.Rental.Room.Booking.System.common.enumrator.AvailableForEnum;
import com.example.Rental.Room.Booking.System.common.enumrator.FurnishingEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@Table(name = "properties")
public class PropertyDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relationship with PropertyOwner (foreign key)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JsonIgnore
    private PropertyOwner owner;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, length = 255)
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FurnishingEnum.furnishing furnishing;

    @Column(length = 30)
    private String type;

    @Enumerated(EnumType.STRING)
    @Column
    private AvailableForEnum.availableFor availableFor = AvailableForEnum.availableFor.ANY;

    @Column(length = 30)
    private String parking;

    @Column(name = "rent_price", precision = 10, scale = 2, nullable = false)
    private BigDecimal rentPrice;

    @Column(name = "security_deposit", precision = 10, scale = 2)
    private BigDecimal securityDeposit = BigDecimal.ZERO;

    private LocalDate availableFrom;

    @Column(name = "post_date")
    private LocalDateTime postDate = LocalDateTime.now();

    @Column(name = "average_rating", precision = 2, scale = 1)
    private BigDecimal averageRating = BigDecimal.ZERO;

    @Column(length = 50)
    private String contact;

    @Column(precision = 10, scale = 8)
    private BigDecimal latitude;

    @Column(precision = 11, scale = 8)
    private BigDecimal longitude;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ImageUrl> images = new ArrayList<>();
}
