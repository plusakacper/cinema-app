package pl.cinema.cinemaapp.service;

import org.springframework.stereotype.Service;
import pl.cinema.cinemaapp.dto.ShowingAddDTO;
import pl.cinema.cinemaapp.entity.Movie;
import pl.cinema.cinemaapp.entity.Place;
import pl.cinema.cinemaapp.entity.Showing;
import pl.cinema.cinemaapp.exception.ShowingException;
import pl.cinema.cinemaapp.repository.MovieRepository;
import pl.cinema.cinemaapp.repository.PlaceRepository;
import pl.cinema.cinemaapp.repository.ShowingRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ShowingService {

    private final ShowingRepository showingRepository;
    private final PlaceRepository placeRepository;
    private final MovieRepository movieRepository;

    public ShowingService(ShowingRepository showingRepository, PlaceRepository placeRepository, MovieRepository movieRepository) {
        this.showingRepository = showingRepository;
        this.placeRepository = placeRepository;
        this.movieRepository = movieRepository;
    }

    public void add (ShowingAddDTO showing) throws ShowingException {
        Optional<Movie> movieOpt = movieRepository.findById(showing.getMovieId());
        Movie movie = movieOpt.orElseThrow(() -> new ShowingException("Movie not found"));

        Showing newShowing = new Showing();
        newShowing.setShowingTime(showing.getShowingTime());
        newShowing.setMovie(movie);

        Showing savedShowing = showingRepository.save(newShowing);

        List<Place> showingPlaces = new ArrayList<>();
        for(int i=0; i<showing.getNumberOfPleaces(); i++){
            Place place = new Place();
            place.setShowing(savedShowing);
            place.setPlaceNumber((i+1L));
            place.setOccupied(false);
            showingPlaces.add(place);
        }
        placeRepository.saveAll(showingPlaces);

    }
}
