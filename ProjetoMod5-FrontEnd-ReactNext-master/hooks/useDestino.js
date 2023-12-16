import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const useDestino = () => {
  const router = useRouter();
  const URL = 'http://localhost:8080/destinos';
  const [destino, setDestino] = useState({ id: 0, nome: null, valor: null, descricao: null, imagem: null });
  const [destinos, setDestinos] = useState([]);

  const handleInputChange = (e) => {
    setDestino({ ...destino, [e.target.name]: e.target.value });
  };

  const listarDestinos = () => {
    axios
      .get(URL)
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const criarDestino = () => {
    axios
      .post(URL, destino)
      .then((response) => {
        router.push('/destino');
      })
      .catch((error) => {
        alert('ERRO - DIGITE NOVAMENTE: ' + error);
      });
  };

  const buscarDestino = (codigo) => {
    axios
      .get(`${URL}/${codigo}`)
      .then((response) => {
        setDestino(response.data);
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const atualizarDestino = () => {
    axios
      .put(`${URL}/${destino.id}`, destino)
      .then(() => {
        router.push('/destino');
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const deleteDestino = (codigo) => {
    axios
      .delete(`${URL}/${codigo}`)
      .then(() => {
        listarDestinos();
      })
      .catch((error) => {
        alert('ERRO - DIGITE NOVAMENTE: ' + error);
      });
  };

  return {
    destino,
    destinos,
    handleInputChange,
    listarDestinos,
    criarDestino,
    buscarDestino,
    atualizarDestino,
    deleteDestino,
  };
};
