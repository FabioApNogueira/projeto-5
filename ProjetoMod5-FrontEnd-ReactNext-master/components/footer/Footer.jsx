import React from 'react';

const Footer = () => {
  return (
    <footer>
      <img
        src="imagens/destinoCertoLogo.png"
        alt="Imagem da Logo da Destino Certo"
      />

      <div className="compra-segura">
        <strong>Aquisição</strong>
        <a href="pagamento.html">Pagamento</a>
        <a href="contato.html">Entre em Contato</a>
        <a href="promocoes.html">Promoção</a>
      </div>

      <div className="contato">
        <strong>CONTATO</strong>
        <span>
          <i className="ph ph-phone" /> 00 0000-0000
        </span>
        <span>
          <i className="ph ph-at" /> fnviagens@fnviagens.com.br
        </span>
        <span>
          <i className="ph ph-map-pin" /> R: Brasil 
        </span>
      </div>

      <div className="redes-sociais">
        <strong>REDES SOCIAIS</strong>
        <div>
          <span>
            <a href="https://www.instagram.com" target="">
              <i className="ph ph-instagram-logo" />
            </a>
          </span>
          <span>
            <a href="#">
              <i className="ph ph-twitter-logo" />
            </a>
          </span>
          <span>
            <a href="https://github.com" target="">
              <i className="ph ph-github-logo" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
