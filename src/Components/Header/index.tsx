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
        <div className='header-content__social-icons-margin'>
          <FaLinkedin
            size={35}
            className='linkedin-icon'
          />
        </div>
        <div className='header-content__social-icons-margin'>
          <FaGithubSquare
            size={35}
            className='github-icon'
          />
        </div>
        <div className='header-content__social-icons-margin'>
          <FaWhatsappSquare
            size={35}
            className='whatsapp-icon'
          />
        </div>
        <div className='header-content__social-icons-margin'>
          <BsArrowDownSquareFill
            size={32}
            className='file-icon'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
