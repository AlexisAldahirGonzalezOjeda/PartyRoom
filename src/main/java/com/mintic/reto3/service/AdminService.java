/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mintic.reto3.service;

import com.mintic.reto3.model.Admin;
import com.mintic.reto3.repository.AdminRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pc
 */
@Service
public class AdminService {
    
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll() {
        return adminRepository.getAll();
    }

    public Optional<Admin> getAdmin(int id) {
        return adminRepository.getAdmin(id);
    }

    public Admin save(Admin c) {
        if (c.getIdAdmin() == null) {
            return adminRepository.save(c);
        } else {
            Optional<Admin> e = adminRepository.getAdmin(c.getIdAdmin());
            if (e.isPresent()) {
                return c;
            } else {
                return adminRepository.save(c);
            }
        }
    }
    
}
