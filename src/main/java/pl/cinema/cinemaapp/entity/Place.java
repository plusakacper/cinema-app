package pl.cinema.cinemaapp.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity(name = "places")
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long placeNumber;
    @Column(nullable = false)
    private Boolean isOccupied;
    @ManyToOne
    private Showing showing;
    @ManyToOne
    private Reservation reservation;
    public Place() {
    }

    public Place(Long id, Long placeNumber, Boolean isOccupied) {
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

    public Showing getShowing() {
        return showing;
    }

    public void setShowing(Showing showing) {
        this.showing = showing;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Place place = (Place) o;
        return Objects.equals(id, place.id) && Objects.equals(placeNumber, place.placeNumber) && Objects.equals(isOccupied, place.isOccupied) && Objects.equals(showing, place.showing) && Objects.equals(reservation, place.reservation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, placeNumber, isOccupied, showing, reservation);
    }
}
