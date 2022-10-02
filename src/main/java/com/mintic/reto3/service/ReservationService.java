/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mintic.reto3.service;

import com.mintic.reto3.model.Reservation;
import com.mintic.reto3.repository.ReservationRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pc
 */
@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation c) {
        if (c.getIdReservation() == null) {
            return reservationRepository.save(c);
        } else {
            Optional<Reservation> e = reservationRepository.getReservation(c.getIdReservation());
            if (e.isPresent()) {
                return c;
            } else {
                return reservationRepository.save(c);
            }
        }
    }
    
}
