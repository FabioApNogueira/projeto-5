package com.destinocerto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.destinocerto.model.Contato;
import com.destinocerto.repository.ContatoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("contatos")
public class ContatoController {

    private final ContatoRepository contatoRepository;

    @Autowired
    public ContatoController(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    @GetMapping
    public List<Contato> getAllContatos() {
        return contatoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Contato getContatoById(@PathVariable Long id) {
        return contatoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Contato createContato(@RequestBody Contato contato) {
        return contatoRepository.save(contato);
    }

    @PutMapping("/{id}")
    public Contato updateContato(@PathVariable Long id, @RequestBody Contato contatoDetails) {
        return contatoRepository.findById(id)
                .map(contato -> {
                    contato.setNome(contatoDetails.getNome());
                    contato.setEmail(contatoDetails.getEmail());
                    contato.setMensagem(contatoDetails.getMensagem());
                    return contatoRepository.save(contato);
                })
                .orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteContato(@PathVariable Long id) {
        contatoRepository.deleteById(id);
    }
}
