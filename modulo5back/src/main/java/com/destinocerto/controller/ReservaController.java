package com.destinocerto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.destinocerto.model.Reserva;
import com.destinocerto.repository.ReservaRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("reservas")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @GetMapping
    public List<Reserva> getAllReservas() {
        return reservaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Reserva getReservaById(@PathVariable Long id) {
        return reservaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Reserva createReserva(@RequestBody Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @PutMapping("/{id}")
    public Reserva updateReserva(@PathVariable Long id, @RequestBody Reserva reservaDetails) {
        return reservaRepository.findById(id)
                .map(reserva -> {
                    reserva.setCliente(reservaDetails.getCliente());
                    reserva.setDestino(reservaDetails.getDestino());
                    reserva.setData(reservaDetails.getData());
                    return reservaRepository.save(reserva);
                })
                .orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteReserva(@PathVariable Long id) {
        reservaRepository.deleteById(id);
    }
}
