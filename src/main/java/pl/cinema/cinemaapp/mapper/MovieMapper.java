package pl.cinema.cinemaapp.mapper;

import org.springframework.stereotype.Component;
import pl.cinema.cinemaapp.dto.MovieDTO;
import pl.cinema.cinemaapp.entity.Movie;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MovieMapper {

    public MovieDTO movieToMovieDTO(Movie movie){
        MovieDTO movieDTO = new MovieDTO();
        movieDTO.setId(movie.getId());
        movieDTO.setName(movie.getName());
        movieDTO.setPrice(movie.getPrice());
        movieDTO.setImgUrl(movie.getImgUrl());
        return movieDTO;
    }

    public List<MovieDTO> moviesToMovieDTOs(List<Movie> movies){
        return movies.stream().map(this::movieToMovieDTO).collect(Collectors.toList());
    }
}
