package com.destinocerto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.destinocerto.model.Destino;
import com.destinocerto.repository.DestinoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("destinos")
public class DestinoController {

    @Autowired
    private DestinoRepository destinoRepository;

    @GetMapping
    public List<Destino> getAllDestinos() {
        return destinoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Destino getDestinoById(@PathVariable Long id) {
        return destinoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Destino createDestino(@RequestBody Destino destino) {
        return destinoRepository.save(destino);
    }

    @PutMapping("/{id}")
    public Destino updateDestino(@PathVariable Long id, @RequestBody Destino destinoDetails) {
        return destinoRepository.findById(id)
                .map(destino -> {
                    destino.setNome(destinoDetails.getNome());
                    destino.setDescricao(destinoDetails.getDescricao());
                    destino.setImagem(destinoDetails.getImagem());
                    destino.setValor(destinoDetails.getValor());
                    return destinoRepository.save(destino);
                })
                .orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteDestino(@PathVariable Long id) {
        destinoRepository.deleteById(id);
    }
}
