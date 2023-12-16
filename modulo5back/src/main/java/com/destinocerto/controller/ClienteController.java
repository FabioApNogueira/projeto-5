package com.destinocerto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.destinocerto.model.Cliente;
import com.destinocerto.repository.ClienteRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("clientes")
public class ClienteController {

    private final ClienteRepository clienteRepository;

    @Autowired
    public ClienteController(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    @GetMapping("/{id}")
    public Cliente getClienteById(@PathVariable Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @PutMapping("/{id}")
    public Cliente updateCliente(@PathVariable Long id, @RequestBody Cliente clienteDetails) {
        return clienteRepository.findById(id)
                .map(cliente -> {
                    cliente.setNome(clienteDetails.getNome());
                    cliente.setEmail(clienteDetails.getEmail());
                    cliente.setCpf(clienteDetails.getCpf());
                    cliente.setDataNascimento(clienteDetails.getDataNascimento());
                    cliente.setSenha(clienteDetails.getSenha());
                    cliente.setTelefone(clienteDetails.getTelefone());
                    return clienteRepository.save(cliente);
                })
                .orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteCliente(@PathVariable Long id) {
        clienteRepository.deleteById(id);
    }
}
