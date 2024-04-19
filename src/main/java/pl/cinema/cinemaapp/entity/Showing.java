package pl.cinema.cinemaapp.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity(name = "showings")
public class Showing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private LocalDateTime showingTime;

    @ManyToOne
    private Movie movie;

    @OneToMany(mappedBy = "showing")
    private List<Reservation> reservationList;

    @OneToMany(mappedBy = "showing")
    private List<Place> placeList;

    public Showing() {
    }

    public Showing(LocalDateTime showingTime, Movie movie) {
        this.showingTime = showingTime;
        this.movie = movie;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getShowingTime() {
        return showingTime;
    }

    public void setShowingTime(LocalDateTime showingTime) {
        this.showingTime = showingTime;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public List<Reservation> getReservationList() {
        return reservationList;
    }

    public void setReservationList(List<Reservation> reservationList) {
        this.reservationList = reservationList;
    }

    public List<Place> getPlaceList() {
        return placeList;
    }

    public void setPlaceList(List<Place> placeList) {
        this.placeList = placeList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Showing showing = (Showing) o;
        return Objects.equals(id, showing.id) && Objects.equals(showingTime, showing.showingTime) && Objects.equals(movie, showing.movie) && Objects.equals(reservationList, showing.reservationList) && Objects.equals(placeList, showing.placeList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, showingTime, movie, reservationList, placeList);
    }
}
