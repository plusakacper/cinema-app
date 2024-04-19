package pl.cinema.cinemaapp.dto;

import java.time.LocalDateTime;

public class ShowingAddDTO {

    private LocalDateTime showingTime;
    private Long movieId;

    private Long numberOfPleaces;

    public ShowingAddDTO() {
    }

    public ShowingAddDTO(LocalDateTime showingTime, Long movieId, Long numberOfPleaces) {
        this.showingTime = showingTime;
        this.movieId = movieId;
        this.numberOfPleaces = numberOfPleaces;
    }

    public LocalDateTime getShowingTime() {
        return showingTime;
    }

    public void setShowingTime(LocalDateTime showingTime) {
        this.showingTime = showingTime;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public Long getNumberOfPleaces() {
        return numberOfPleaces;
    }

    public void setNumberOfPleaces(Long numberOfPleaces) {
        this.numberOfPleaces = numberOfPleaces;
    }
}
