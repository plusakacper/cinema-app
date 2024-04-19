package pl.cinema.cinemaapp.controller;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.cinema.cinemaapp.dto.ReservationAddDTO;
import pl.cinema.cinemaapp.dto.ReservationInfo;
import pl.cinema.cinemaapp.dto.ShowingAddDTO;
import pl.cinema.cinemaapp.exception.ReservationException;
import pl.cinema.cinemaapp.exception.ShowingException;
import pl.cinema.cinemaapp.service.ReservationService;
import pl.cinema.cinemaapp.service.ShowingService;

import java.security.Principal;
import java.util.List;

@RestController
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/reservations")
    public ResponseEntity<ReservationInfo> add(@RequestBody @Valid ReservationAddDTO dto) throws ShowingException {
        ReservationInfo reservationInfo = reservationService.makeReservation(dto);
        return ResponseEntity.ok(reservationInfo);
    }

    @GetMapping("/reservations-by-email/{email}")
    public ResponseEntity<List<ReservationInfo>> getByEmail(@PathVariable  String email){
        List<ReservationInfo> userReservation = reservationService.getUserReservation(email);
        return ResponseEntity.ok(userReservation);
    }

    @DeleteMapping("/reservations/{id}")
    public ResponseEntity<Void> cancelReservation(@PathVariable Long id) throws ReservationException {
        reservationService.cancelReservation(id);
        return ResponseEntity.ok().build();
    }

}
