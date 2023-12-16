import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const useReserva = () => {
  const router = useRouter();
  const URL = 'http://localhost:8080/reservas';

  const [cliente, setCliente] = useState({ id: 1 });
  const [destino, setDestino] = useState({ id: 1 });
  const [reserva, setReserva] = useState({ id: 0, cliente, destino, data: '' });
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    setReserva({ ...reserva, cliente, destino });
  }, [cliente, destino]);

  const handleInputChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleInputChangeCliente = (e) => {
    setCliente({ id: Number.parseInt(e.target.value) });
  };

  const handleInputChangeDestino = (e) => {
    setDestino({ id: Number.parseInt(e.target.value) });
  };

  const listarReservas = () => {
    axios
      .get(URL)
      .then((response) => {
        setReservas(response.data);
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const criarReserva = () => {
    axios
      .post(URL, reserva)
      .then((response) => {
        router.push('/reserva');
      })
      .catch((error) => {
        alert('ERRO - DIGITE NOVAMENTE: ' + error);
      });
  };

  const buscarReserva = (codigo) => {
    axios
      .get(`${URL}/${codigo}`)
      .then((response) => {
        setReserva(response.data);
        setCliente(response.data.cliente);
        setDestino(response.data.destino);
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const atualizarReserva = () => {
    axios
      .put(`${URL}/${reserva.id}`, reserva)
      .then(() => {
        router.push('/reserva');
      })
      .catch((error) => {
        console.error('ERRO - DIGITE NOVAMENTE: ', error);
      });
  };

  const deleteReserva = (codigo) => {
    axios
      .delete(`${URL}/${codigo}`)
      .then(() => {
        listarReservas();
      })
      .catch((error) => {
        alert('ERRO - DIGITE NOVAMENTE: ' + error);
      });
  };

  return {
    cliente,
    handleInputChangeCliente,
    destino,
    handleInputChangeDestino,
    reserva,
    reservas,
    handleInputChange,
    listarReservas,
    criarReserva,
    buscarReserva,
    atualizarReserva,
    deleteReserva,
  };
};
