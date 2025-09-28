package com.example.Rental.Room.Booking.System.common.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth.requestMatchers(
                        "api/auth/user/register",
                        "api/auth/user/login",
                        "api/auth/owner/register",
                        "api/auth/owner/get",
                        "api/auth/owner/login",
                        "api/property/get",
                        "api/property/upload",
                        "test/upload"


                ).permitAll().anyRequest().authenticated());
        return http.build();
    }
}
