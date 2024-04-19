package pl.cinema.cinemaapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.cinema.cinemaapp.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
