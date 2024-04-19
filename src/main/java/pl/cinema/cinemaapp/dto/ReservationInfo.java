package pl.cinema.cinemaapp.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ReservationInfo {
    private Long id;
    private String movieName;
    private LocalDateTime showingTime;
    private Double price;

    private List<Long> places;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public LocalDateTime getShowingTime() {
        return showingTime;
    }

    public void setShowingTime(LocalDateTime showingTime) {
        this.showingTime = showingTime;
    }

    public List<Long> getPlaces() {
        return places;
    }

    public void setPlaces(List<Long> places) {
        this.places = places;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
