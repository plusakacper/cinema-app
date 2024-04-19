package pl.cinema.cinemaapp.controller;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.cinema.cinemaapp.dto.MovieAddDTO;
import pl.cinema.cinemaapp.dto.MovieDTO;
import pl.cinema.cinemaapp.dto.MovieDetailsDTO;
import pl.cinema.cinemaapp.service.MovieService;

import java.util.List;

@RestController
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    public ResponseEntity<List<MovieDTO>> getAll(){
        return ResponseEntity.ok(movieService.getAll());
    }

    @GetMapping("/movies/{id}")
    public ResponseEntity<MovieDetailsDTO> getById(@PathVariable Long id) throws Exception {
            return ResponseEntity.ok(movieService.getById(id));
    }

    @PostMapping("/movie")
    public ResponseEntity<Void> add(@RequestBody @Valid MovieAddDTO dto) {
        movieService.add(dto);
        return ResponseEntity.ok().build();
    }

}
