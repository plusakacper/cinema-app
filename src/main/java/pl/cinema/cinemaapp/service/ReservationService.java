package pl.cinema.cinemaapp.service;

import org.springframework.stereotype.Service;
import pl.cinema.cinemaapp.dto.PlaceDTO;
import pl.cinema.cinemaapp.dto.ReservationAddDTO;
import pl.cinema.cinemaapp.dto.ReservationInfo;
import pl.cinema.cinemaapp.entity.Place;
import pl.cinema.cinemaapp.entity.Reservation;
import pl.cinema.cinemaapp.entity.Showing;
import pl.cinema.cinemaapp.exception.ReservationException;
import pl.cinema.cinemaapp.exception.ShowingException;
import pl.cinema.cinemaapp.repository.PlaceRepository;
import pl.cinema.cinemaapp.repository.ReservationRepository;
import pl.cinema.cinemaapp.repository.ShowingRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    private final ShowingRepository showingRepository;
    private final ReservationRepository reservationRepository;
    private final PlaceRepository placeRepository;

    public ReservationService(ShowingRepository showingRepository, ReservationRepository reservationRepository, PlaceRepository placeRepository) {
        this.showingRepository = showingRepository;
        this.reservationRepository = reservationRepository;
        this.placeRepository = placeRepository;
    }

    public ReservationInfo makeReservation(ReservationAddDTO reservationAddDTO) throws ShowingException {
        Optional<Showing> showingOpt = showingRepository.findById(reservationAddDTO.getShowingId());
        Showing showing = showingOpt.orElseThrow(() -> new ShowingException("Showing not found"));

        Reservation reservation = new Reservation();
        reservation.setReservationTime(LocalDateTime.now());
        reservation.setEmail(reservationAddDTO.getEmail());
        reservation.setShowing(showing);
        reservation.setPhoneNumber(reservationAddDTO.getPhoneNumber());

        List<Place> places = placeRepository.findAllById(reservationAddDTO.getPlacesList());
        reservation.setPlaceList(places);
        Reservation savedReservation = reservationRepository.save(reservation);
        for (Place p : places) {
            p.setReservation(savedReservation);
            p.setOccupied(true);
        }
        placeRepository.saveAll(places);

        ReservationInfo reservationInfo = new ReservationInfo();
        reservationInfo.setId(savedReservation.getId());
        reservationInfo.setMovieName(savedReservation.getShowing().getMovie().getName());
        reservationInfo.setShowingTime(savedReservation.getShowing().getShowingTime());
        reservationInfo.setPlaces(savedReservation.getPlaceList().stream().map(Place::getPlaceNumber).collect(Collectors.toList()));
        reservationInfo.setPrice(savedReservation.getPlaceList().size() * savedReservation.getShowing().getMovie().getPrice());
        return reservationInfo;
    }

    public List<ReservationInfo> getUserReservation(String email) {
        List<Reservation> reservationByEmail = reservationRepository.getReservationByEmail(email);
        List<ReservationInfo> reservationInfoList = new ArrayList<>();
        for(Reservation reservation: reservationByEmail){
            ReservationInfo reservationInfo = new ReservationInfo();
            reservationInfo.setId(reservation.getId());
            reservationInfo.setMovieName(reservation.getShowing().getMovie().getName());
            reservationInfo.setShowingTime(reservation.getShowing().getShowingTime());
            reservationInfo.setPlaces(reservation.getPlaceList().stream().map(Place::getPlaceNumber).collect(Collectors.toList()));
            reservationInfo.setPrice(reservation.getPlaceList().size() * reservation.getShowing().getMovie().getPrice());
            reservationInfoList.add(reservationInfo);
        }

        return reservationInfoList;
    }

    public void cancelReservation(Long id) throws ReservationException {
        Optional<Reservation> reservationOpt = reservationRepository.findById(id);
        Reservation reservation = reservationOpt.orElseThrow(() -> new ReservationException("Reservation not found"));
        List<Place> places = reservation.getPlaceList();
        for(Place p: places){
            p.setOccupied(false);
            p.setReservation(null);
        }
        placeRepository.saveAll(places);
        reservationRepository.delete(reservation);
    }
}
