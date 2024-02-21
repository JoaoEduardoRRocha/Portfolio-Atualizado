import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa';
import { BsArrowDownSquareFill } from "react-icons/bs";

import React from 'react'
import "./index.css";

const Header: React.FC = () => {

  return (
    <header className='header-content'>
      <h1 className='header-content__title'>João Rocha</h1>
      <h2 className='header-content__subtitle'>Desenvolvedor React Front-end</h2>

      <div className='header-content__social-icons'>
        <a className='header-content__social-icons-margin'
          href='https://www.linkedin.com/in/joaoedrocha/'
          target="_blank"
          rel="noreferrer">
          <FaLinkedin
            size={35}
            className='linkedin-icon'
          />
        </a>
        <a className='header-content__social-icons-margin'
          href='https://github.com/JoaoEduardoRRocha'
          target="_blank"
          rel="noreferrer">
          <FaGithubSquare
            size={35}
            className='github-icon'
          />
        </a>
        <a className='header-content__social-icons-margin'
          href='https://api.whatsapp.com/send/?phone=5521976747042&text&type=phone_number&app_absent=0'
          target="_blank"
          rel="noreferrer">
          <FaWhatsappSquare
            size={35}
            className='whatsapp-icon'
          />
        </a>
        <a className='header-content__social-icons-margin'
          href='https://drive.google.com/file/d/1vUZBDba9TtnSUgfuw1A_I2RYGNbayeJV/view'
          target="_blank"
          rel="noreferrer">
          <BsArrowDownSquareFill
            size={32}
            className='file-icon'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
