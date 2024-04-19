package pl.cinema.cinemaapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.cinema.cinemaapp.dto.JwtAuthenticationResponse;
import pl.cinema.cinemaapp.dto.SignUpRequest;
import pl.cinema.cinemaapp.dto.SigninRequest;
import pl.cinema.cinemaapp.dto.UserInfoDTO;
import pl.cinema.cinemaapp.service.AuthenticationService;

import java.security.Principal;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<JwtAuthenticationResponse> signup(@RequestBody SignUpRequest request) {
        return ResponseEntity.ok(authenticationService.signup(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest request) {
        return ResponseEntity.ok(authenticationService.signin(request));
    }

    @GetMapping("/me")
    public ResponseEntity<UserInfoDTO> me(Principal principal){
        return ResponseEntity.ok(new UserInfoDTO(principal.getName()));
    }
}
