package pl.cinema.cinemaapp.controller;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.cinema.cinemaapp.dto.MovieAddDTO;
import pl.cinema.cinemaapp.dto.MovieDTO;
import pl.cinema.cinemaapp.dto.ShowingAddDTO;
import pl.cinema.cinemaapp.exception.ShowingException;
import pl.cinema.cinemaapp.service.MovieService;
import pl.cinema.cinemaapp.service.ShowingService;

import java.util.List;

@RestController
public class ShowingController {

    private final ShowingService showingService;

    public ShowingController(ShowingService showingService) {
        this.showingService = showingService;
    }

    @PostMapping("/showings")
    public ResponseEntity<Void> add(@RequestBody @Valid ShowingAddDTO dto) throws ShowingException {
        showingService.add(dto);
        return ResponseEntity.ok().build();
    }

}
