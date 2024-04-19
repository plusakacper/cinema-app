package pl.cinema.cinemaapp.service;

import pl.cinema.cinemaapp.dto.JwtAuthenticationResponse;
import pl.cinema.cinemaapp.dto.SignUpRequest;
import pl.cinema.cinemaapp.dto.SigninRequest;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
