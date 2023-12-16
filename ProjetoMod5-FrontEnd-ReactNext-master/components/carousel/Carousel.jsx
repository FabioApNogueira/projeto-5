import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {[
          {
            src: 'imagens/capa1.jpg',
            alt:
              'Imagem de três pessoas viajando com mochilas nas costas, elas estão paradas e bebendo água.',
            title: 'Explore lugares inesquecíveis',
            description: 'Economize muito com as melhores ofertas de viagens.',
          },
          {
            src: 'imagens/capa01.jpg',
            alt:
              'Imagem de uma estrada com montanhas congeladas à esquerda e um lago à direita numa noite com céu alaranjado.',
            title: 'Aventuras incríveis começam aqui',
            description: 'Viagens que despertam a sua alma e enriquecem a sua mente.',
          },
          {
            src: 'imagens/capa4.jpg',
            alt:
              'Imagem de um homem caminhando pelo campo de mochila nas costas, com um avião voando ao fundo.',
            title: 'Descubra o encanto do mundo',
            description: 'Viagens que criam memórias duradouras.',
          },
        ].map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={item.src} className="d-block w-100" alt={item.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
