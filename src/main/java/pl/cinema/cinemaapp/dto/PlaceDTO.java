package pl.cinema.cinemaapp.dto;

import jakarta.persistence.Column;

public class PlaceDTO {
    private Long id;
    private Long placeNumber;
    private Boolean isOccupied;

    public PlaceDTO() {
    }

    public PlaceDTO(Long id, Long placeNumber, Boolean isOccupied) {
        this.id = id;
        this.placeNumber = placeNumber;
        this.isOccupied = isOccupied;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPlaceNumber() {
        return placeNumber;
    }

    public void setPlaceNumber(Long placeNumber) {
        this.placeNumber = placeNumber;
    }

    public Boolean getOccupied() {
        return isOccupied;
    }

    public void setOccupied(Boolean occupied) {
        isOccupied = occupied;
    }
}
