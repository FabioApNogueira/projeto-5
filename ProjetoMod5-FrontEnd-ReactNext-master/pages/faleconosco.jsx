import React from 'react';
import Head from 'next/head';
import { useContato } from '@/hooks/useContato';

export default function FaleConosco() {
  const { contato, handleInputChange, criarContato } = useContato();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles/style.css" />
        <link rel="stylesheet" href="styles/mediaquery.css" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Entre em Contato</title>
      </Head>

      <div className="position-relative overflow-hidden">
        <img
          className="capinha card-img-top mb-3"
          src="imagens/capa3.jpg"
          alt="Imagem de uma moça vestindo um kimono oriental, com um guarda-chuva, em cima de uma montanha, com uma cachoeira ao fundo."
        />
        <div className="text-center">
          <h2 className="display-5">INFORMAÇÃO</h2>
          
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md col-lg">
              <form className="needs-validation" noValidate="">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="nome" className="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      value={contato.nome}
                      onChange={handleInputChange}
                      name="nome"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="nome@exemplo.com"
                      name="email"
                      value={contato.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">
                      Mensagem
                    </label>
                    <textarea
                      className="form-control"
                      id="mensagem"
                      rows={3}
                      name="mensagem"
                      value={contato.mensagem}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button
                  className="w-100 btn btn-primary btn-lg"
                  onClick={criarContato}
                >
                  Enviar
                </button>
              </form>
              <hr className="my-4" />
              <p className="text-center display-6">
                Funcionamento de seg a sexta das 08:00h às 18:00h:
              </p>
              <p className="text-center lead">SAC: (00) 0000-0000</p>
              <p className="text-center lead">Whatsapp: (00) 0000-0000</p>
              <p className="text-center lead">fnviagens@fnviagens</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
