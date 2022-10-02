/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mintic.reto3.service;

import com.mintic.reto3.model.Score;
import com.mintic.reto3.repository.ScoreRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pc
 */
@Service
public class ScoreService {
    
    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAll() {
        return scoreRepository.getAll();
    }

    public Optional<Score> getScore(int id) {
        return scoreRepository.getScore(id);
    }

    public Score save(Score c) {
        if (c.getIdScore() == null) {
            return scoreRepository.save(c);
        } else {
            Optional<Score> e = scoreRepository.getScore(c.getIdScore());
            if (e.isPresent()) {
                return c;
            } else {
                return scoreRepository.save(c);
            }
        }
    }
    
}
