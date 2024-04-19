package pl.cinema.cinemaapp.dto;

import jakarta.persistence.Column;

import java.time.LocalDateTime;
import java.util.List;

public class ShowingDTO {

    private Long id;
    private LocalDateTime showingTime;
    private List<PlaceDTO> places;
    public ShowingDTO() {
    }

    public ShowingDTO(Long id, LocalDateTime showingTime) {
        this.id = id;
        this.showingTime = showingTime;
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

    public List<PlaceDTO> getPlaces() {
        return places;
    }

    public void setPlaces(List<PlaceDTO> places) {
        this.places = places;
    }
}
