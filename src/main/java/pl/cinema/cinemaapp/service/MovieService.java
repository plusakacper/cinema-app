package pl.cinema.cinemaapp.service;

import org.springframework.stereotype.Service;
import pl.cinema.cinemaapp.dto.*;
import pl.cinema.cinemaapp.entity.Movie;
import pl.cinema.cinemaapp.entity.Place;
import pl.cinema.cinemaapp.entity.Showing;
import pl.cinema.cinemaapp.exception.MovieException;
import pl.cinema.cinemaapp.mapper.MovieMapper;
import pl.cinema.cinemaapp.repository.MovieRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final MovieMapper movieMapper;

    public MovieService(MovieRepository movieRepository, MovieMapper movieMapper) {
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
    }

    public List<MovieDTO> getAll() {
        return movieMapper.moviesToMovieDTOs(movieRepository.findAll());
    }

    public MovieDetailsDTO getById(Long id) throws MovieException {
        Movie movie = movieRepository.findById(id).orElseThrow(()-> new MovieException("Movie not found"));
        MovieDetailsDTO movieDetailsDTO = new MovieDetailsDTO();
        movieDetailsDTO.setId(movie.getId());
        movieDetailsDTO.setName(movie.getName());
        movieDetailsDTO.setPrice(movie.getPrice());
        movieDetailsDTO.setImgUrl(movie.getImgUrl());

        List<ShowingDTO> showings = new ArrayList<>();
        for (Showing showing: movie.getShowingList()){
            if(showing.getShowingTime().isAfter(LocalDateTime.now())){
                List<PlaceDTO> places = new ArrayList<>();
                ShowingDTO showingDTO = new ShowingDTO();
                showingDTO.setId(showing.getId());
                showingDTO.setShowingTime(showing.getShowingTime());
                for(Place place: showing.getPlaceList()){
                    PlaceDTO placeDTO = new PlaceDTO();
                    placeDTO.setId(place.getId());
                    placeDTO.setPlaceNumber(place.getPlaceNumber());
                    placeDTO.setOccupied(place.getOccupied());
                    places.add(placeDTO);
                }
                showingDTO.setPlaces(places);
                showings.add(showingDTO);
            }
        }
        movieDetailsDTO.setShowings(showings);
        return movieDetailsDTO;
    }

    public void add(MovieAddDTO movie){
        Movie newMovie = new Movie();
        newMovie.setName(movie.getName());
        newMovie.setPrice(movie.getPrice());
        newMovie.setImgUrl(movie.getImgUrl());
        movieRepository.save(newMovie);
    }
}
