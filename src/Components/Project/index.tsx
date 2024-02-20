import React from 'react'
import "./index.css";

import { TbApi } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub, FaYoutube } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import { SiTypescript } from "react-icons/si";

const Project: React.FC = () => {

  return (
    <div className='projects-container'>
      <h3 className='projects-container__title'>Projetos</h3>

      <div className='projects-content'>
        <div className='projects-content__header'>
          <img
            className='projects-content__img-project'
            src="https://64.media.tumblr.com/453faa185abf5ff97aaea11a955fba4c/a226daa5c7bc20be-3d/s400x600/aa63791fb4d782c4e6a8a7b730b771646cba37eb.pnj"
            alt="Logo da Rocketseat"
          />
          <h3 className='projects-content__title'>Food Explorer - Fullstack</h3>
        </div>
        <p className='projects-content__text'>
          Este projeto está em desenvolvimento.
          Você pode acompanhar todo o progresso
          diário pelo Github ou então progresso
          semanal que será postado no Youtube.
        </p>

        <div className='projects-content__tecnology-icons'>
          <legend className='projects-content__tecnology'>Tecnologias Utilizadas:</legend>

          <SiTypescript
            size={35}
          />
          <SiMongodb
            size={35}
          />
          <TbApi
            size={35}
          />
          <FaReact
            size={35}
          />
        </div>

        <div className='projects-content__btn-container'>
          <div className='projects-content__btn-github'>
            <FaGithub
              size={35}
            />
          </div>
          <div className='projects-content__btn-deploy'>
            <MdArrowOutward
              size={35}
            />
          </div>
          <div className='projects-content__btn-youtube'>
            <FaYoutube
              size={35}
            />
          </div>
        </div>
      </div>

      <div className='projects-content'>
        <div className='projects-content__header'>
          <img
            className='projects-content__img-project'
            src="https://64.media.tumblr.com/22c718103f5bf8a76d3bf8d18da9023b/f506969facba5c48-96/s540x810/a570b81daeba2ff4e33d7b9c5c42f75417f64799.pnj"
            alt="Logo Netflix"
          />
          <h3 className='projects-content__title'>Netflix - Front-end</h3>
        </div>
        <p className='projects-content__text'>
          Este projeto está em desenvolvimento.
          Você pode acompanhar todo o progresso
          diário pelo Github ou então progresso
          semanal que será postado no Youtube.
        </p>

        <div className='projects-content__tecnology-icons'>
          <legend className='projects-content__tecnology'>Tecnologias Utilizadas:</legend>
          <TbApi
            size={35}
          />
          <IoLogoJavascript
            size={35}
          />
          <FaReact
            size={35}
          />
          <SiMongodb
            size={35}
          />
        </div>

        <div className='projects-content__btn-container'>
          <div className='projects-content__btn-github'>
            <FaGithub
              size={35}
            />
          </div>
          <div className='projects-content__btn-deploy'>
            <MdArrowOutward
              size={35}
            />
          </div>
          <div className='projects-content__btn-youtube'>
            <FaYoutube
              size={35}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
