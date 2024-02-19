import { FaLinkedin, FaGithubSquare, FaWhatsappSquare, FaFileAlt, FaReact, FaCss3 } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import React from 'react'
import "./index.css";

const Header: React.FC = () => {

  return (
    <header>
      <h1>João Rocha</h1>
      <h2>Desenvolvedor React Front-end</h2>

      <div>
        <div>
          <FaLinkedin
            size={35}
          />
        </div>
        <div>
          <FaGithubSquare
            size={35}
          />
        </div>
        <div>
          <FaWhatsappSquare
            size={35}
          />
        </div>
        <div>
          <MdEmail
            size={35}
          />
        </div>
        <div>
          <FaFileAlt
            size={35}
          />
        </div>
      </div>

      <legend>Principais Tecnologias:</legend>
      <div>
        <div>
          <BiLogoJavascript
            size={35}
          />
        </div>
        <div>
          <BiLogoTypescript
            size={35}
          />
        </div>
        <div>
          <FaReact
            size={35}
          />
        </div>
        <div>
          <FaCss3
            size={35}
          />
        </div>

      </div>
    </header>
  );
};

export default Header;
