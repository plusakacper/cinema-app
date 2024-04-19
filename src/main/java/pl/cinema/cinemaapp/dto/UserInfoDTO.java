package pl.cinema.cinemaapp.dto;

public class UserInfoDTO {

    private String email;

    public UserInfoDTO(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
