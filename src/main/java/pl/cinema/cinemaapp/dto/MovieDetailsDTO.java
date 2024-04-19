package pl.cinema.cinemaapp.dto;

import java.util.List;

public class MovieDetailsDTO {

    private Long id;
    private String name;
    private Double price;
    private String imgUrl;
    private List<ShowingDTO> showings;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public List<ShowingDTO> getShowings() {
        return showings;
    }

    public void setShowings(List<ShowingDTO> showings) {
        this.showings = showings;
    }


}
