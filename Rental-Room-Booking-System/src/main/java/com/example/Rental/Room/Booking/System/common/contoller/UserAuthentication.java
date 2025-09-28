package com.example.Rental.Room.Booking.System.common.contoller;

import com.example.Rental.Room.Booking.System.common.dto.ApiResponse;
import com.example.Rental.Room.Booking.System.common.entity.PropertyDetailsDto;
import com.example.Rental.Room.Booking.System.common.entity.PropertyOwner;
import com.example.Rental.Room.Booking.System.common.entity.User;
import com.example.Rental.Room.Booking.System.common.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/auth/")
public class UserAuthentication {

    User user;
    @Autowired
    AuthenticationService authenticationService;

//    @PostMapping("/user/register")
//    public String register(@RequestBody User user) {
//        return authenticationService.userRegister(user);
//    }

//    @PostMapping("/user/login")
//    public String login(@RequestBody User user) {
//        return authenticationService.userLogin(user);
//    }

//    Owner login/register
    @PostMapping("/owner/register")
    public ResponseEntity<ApiResponse<PropertyOwner>> onwerRegister(@RequestBody PropertyOwner owner) {
        return authenticationService.ownerRegister(owner);
    }

    @PostMapping("/owner/login")
    public ResponseEntity<ApiResponse<PropertyOwner>> onwerLogin(@RequestBody PropertyOwner owner) {
        return authenticationService.ownerLogin(owner);
    }


    @PostMapping("/user/register")
    public ResponseEntity<ApiResponse<User>> userRegister(@RequestBody User user) {
        System.out.println("Backend received:");
        System.out.println("Name: " + user.getName());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Password: " + user.getPassword());
        return authenticationService.userRegister(user);
    }

    @PostMapping("/user/login")
    public ResponseEntity<ApiResponse<User>> userLogin(@RequestBody User user) {
        System.out.println("Backend received:");
        System.out.println("Name: " + user.getName());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Password: " + user.getPassword());
        return authenticationService.userLogin(user);
    }

}
