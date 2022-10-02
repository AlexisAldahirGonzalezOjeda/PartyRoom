/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mintic.reto3.service;

import com.mintic.reto3.model.Partyroom;
import com.mintic.reto3.repository.PartyroomRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pc
 */
@Service
public class PartyroomService {

    @Autowired
    private PartyroomRepository partyroomRepository;

    public List<Partyroom> getAll() {
        return partyroomRepository.getAll();
    }

    public Optional<Partyroom> getPartyroom(int id) {
        return partyroomRepository.getPartyroom(id);
    }

    public Partyroom save(Partyroom p) {
        if (p.getId() == null) {
            return partyroomRepository.save(p);
        } else {
            Optional<Partyroom> e = partyroomRepository.getPartyroom(p.getId());
            if (e.isPresent()) {
                return p;
            } else {
                return partyroomRepository.save(p);
            } 
        }
    }

}
