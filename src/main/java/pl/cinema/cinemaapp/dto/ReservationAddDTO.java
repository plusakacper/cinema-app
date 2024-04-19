package pl.cinema.cinemaapp.dto;


import java.util.List;

public class ReservationAddDTO {

    private Long showingId;
    private String email;
    private String phoneNumber;

    private List<Long> placesList;

    public Long getShowingId() {
        return showingId;
    }

    public void setShowingId(Long showingId) {
        this.showingId = showingId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Long> getPlacesList() {
        return placesList;
    }

    public void setPlacesList(List<Long> placesList) {
        this.placesList = placesList;
    }
}
