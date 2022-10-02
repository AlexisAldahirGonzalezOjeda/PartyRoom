/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mintic.reto3.service;

import com.mintic.reto3.model.Message;
import com.mintic.reto3.repository.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pc
 */
@Service
public class MessageService {
    
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll() {
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return messageRepository.getMessage(id);
    }

    public Message save(Message c) {
        if (c.getIdMessage() == null) {
            return messageRepository.save(c);
        } else {
            Optional<Message> e = messageRepository.getMessage(c.getIdMessage());
            if (e.isPresent()) {
                return c;
            } else {
                return messageRepository.save(c);
            }
        }
    }
    
}
