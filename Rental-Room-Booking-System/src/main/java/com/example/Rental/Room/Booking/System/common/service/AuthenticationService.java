package com.example.Rental.Room.Booking.System.common.service;

import com.example.Rental.Room.Booking.System.common.dto.ApiResponse;
import com.example.Rental.Room.Booking.System.common.entity.PropertyOwner;
import com.example.Rental.Room.Booking.System.common.entity.User;
import com.example.Rental.Room.Booking.System.common.repository.PropertyOnwerRepository;
import com.example.Rental.Room.Booking.System.common.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthenticationService {
//    Entity
    private User user;
    private PropertyOwner propertyOwner;
    private ApiResponse apiResponse;
//    Repository
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PropertyOnwerRepository propertyOnwerRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

//    User Register
//    public String userRegister(User user){
//        if(userRepository.findByEmail(user.getEmail()).isPresent()){
//            return "User already exists";
//        }
//        if(user.getPassword() != null) {
//            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); // hash password
//        }
//
//        userRepository.save(user);
//
//        return "User is registered";
//    }
public ResponseEntity<ApiResponse<User>> userRegister(User user){
    if(userRepository.findByEmail(user.getEmail()).isPresent()){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "User already exists", null));
    }
    if(user.getPassword() != null) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); // hash password
    }

    userRepository.save(user);

    return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(200, "User registered successfully", null));
}
//     User Login
    public ResponseEntity<ApiResponse<User>> userLogin(User user){
        Optional<User> optionalUser = userRepository.findByEmail(user.getEmail());
        // Check if user exists
        if(optionalUser.isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "User does not exists", null));
        }

        User existingUser = optionalUser.get();
        // Check if password exists (nullable for Google login)
        if(existingUser.getPassword() == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "Password is empty", null));
        }

        // Verify password
        if(bCryptPasswordEncoder.matches(user.getPassword(), existingUser.getPassword())){
            return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(200, "Login Sucessfully ", null));
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "Wrong Password", null));
    }


    public List<User> getUserList(){
        return userRepository.findAll();
    }
    public List<PropertyOwner> getPropertyOwnerList(){
        return propertyOnwerRepository.findAll();
    }

//    Property Owner Login and Register
    public ResponseEntity<ApiResponse<PropertyOwner>> ownerRegister(PropertyOwner owner){
        Optional<PropertyOwner> ownerExist=propertyOnwerRepository.findByEmail(owner.getEmail());
        if(ownerExist.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "User already exists", null));
        }

        if(owner.getPassword() == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "Password is empty", null));
        }

        String hashPassword = bCryptPasswordEncoder.encode(owner.getPassword());
        owner.setPassword(hashPassword);
        propertyOnwerRepository.save(owner);
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(200, "User registered successfully", null));
    }

//      Property Owner login
    public ResponseEntity<ApiResponse<PropertyOwner>> ownerLogin(PropertyOwner owner){
        Optional<PropertyOwner> optionalUser = propertyOnwerRepository.findByEmail(owner.getEmail());

        // Check if user exists
        if(optionalUser.isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "User does not exists", null));
        }
        PropertyOwner existingUser = optionalUser.get();
        // Check if password exists (nullable for Google login)
        if(existingUser.getPassword() == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "password is empty", null));
        }
        // Verify password
        if(bCryptPasswordEncoder.matches(owner.getPassword(), existingUser.getPassword())){
            return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(200, "Login Sucessfully ", null));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(400, "Wrong Password", null));
    }
}
