package pl.cinema.cinemaapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.cinema.cinemaapp.entity.Place;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
}
