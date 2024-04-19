package pl.cinema.cinemaapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.cinema.cinemaapp.entity.Showing;

@Repository
public interface ShowingRepository extends JpaRepository<Showing, Long> {
}
