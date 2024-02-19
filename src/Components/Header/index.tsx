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
          />
        </div>
        <div className='header-content__social-icons-margin'>
          <FaGithubSquare
            size={35}
          />
        </div>
        <div className='header-content__social-icons-margin'>
          <FaWhatsappSquare
            size={35}
          />
        </div>
        <div className='header-content__social-icons-margin'>
          <BsArrowDownSquareFill
            size={32}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
