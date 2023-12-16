import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link href="/" passHref>
            <a className="navbar-brand">
              <img
                src="imagens/destinoCertoLogo.png"
                alt=""
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navItem("/", "Home", "bi-house")}
              {navItem("/promocoes", "Promoções", "bi-cash-coin")}
              {navItem("/faleconosco", "Entre em Contato", "bi-chat-right")}
              {navItem("/entrar", "Logar", "bi-box-arrow-in-right")}
            </ul>

            <hr className="group-divider" />

            <div className="dropdown ms-2">
              <button
                className="btn btn-outline-light btn-fundo dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {dropdownItem("/cliente", "Clientes")}
                {dropdownItem("/destino", "Destinos")}
                {dropdownItem("/reserva", "Reservas")}
                {dropdownItem("/contato", "Contato")}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const navItem = (href, label, iconClass) => (
  <li className="nav-item" key={href}>
    <Link href={href} passHref>
      <a className="nav-link" aria-current="page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className={`bi ${iconClass}`}
          viewBox="0 0 16 16"
        >
          {/* Icon paths */}
        </svg>
        {label}
      </a>
    </Link>
  </li>
);

const dropdownItem = (href, label) => (
  <li key={href}>
    <Link href={href} passHref>
      <a className="dropdown-item dropdown-link">{label}</a>
    </Link>
  </li>
);

export default Header;
