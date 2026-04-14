package com.freelance.platform.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import com.freelance.platform.entity.User;
import com.freelance.platform.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return repo.save(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        Optional<User> u = repo.findByEmail(user.getEmail());

        if (u.isPresent() && u.get().getPassword().equals(user.getPassword())) {
            return u.get();
        }
        return null;
    }
}