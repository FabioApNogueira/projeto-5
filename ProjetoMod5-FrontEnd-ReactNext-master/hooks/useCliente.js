import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const useCliente = () => {
  const router = useRouter();
  const URL = 'http://localhost:8080/clientes';
  const [client, setClient] = useState({
    id: 0,
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
  });
  const [clients, setClients] = useState([]);

  const handleInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const listarClientes = () => {
    axios
      .get(URL)
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const criarCliente = () => {
    axios
      .post(URL, client)
      .then((response) => {
        router.push('/cliente');
      })
      .catch((error) => {
        alert('ERRO - DIGITE NOVAMENTE: ' + error);
      });
  };

  const buscarCliente = (codigo) => {
    axios
      .get(`${URL}/${codigo}`)
      .then((response) => {
        setClient(response.data);
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const atualizarCliente = () => {
    axios
      .put(`${URL}/${client.id}`, client)
      .then(() => {
        router.push('/cliente');
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const deleteCliente = (codigo) => {
    axios
      .delete(`${URL}/${codigo}`)
      .then(() => {
        listarClientes();
      })
      .catch((error) => {
        alert('ERRO - DIGITE NOVAMENTE: ' + error);
      });
  };

  return {
    client,
    clients,
    handleInputChange,
    listarClientes,
    criarCliente,
    buscarCliente,
    atualizarCliente,
    deleteCliente,
  };
};
