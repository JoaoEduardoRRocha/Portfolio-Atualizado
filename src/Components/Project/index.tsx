import React from 'react'
import "./index.css";

import { TbApi } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub, FaCss3Alt, FaSass, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import { SiTypescript, SiSwiper } from "react-icons/si";

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
          <div className='projects-content__title-container'>
            <h3 className='projects-content__title'>Food Explorer</h3>
            <div className='projects-content__subtitle-fullstack'>
              FULLSTACK
            </div>
          </div>
        </div>
        <p className='projects-content__text'>
          Projeto quase finalizado. Ao encontrar no README do projeto, você poderá ver as atividades em andamento e também as futuras atualizações.
        </p>

        <div className='projects-content__tecnology-icons'>
          <legend className='projects-content__tecnology'>TECNOLOGIAS UTILIZADAS:</legend>
          <div className='projects-content__icons'>
            <SiTypescript
              size={35}
            />
            <FaNodeJs
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
            <FaSass
              size={35}
            />
          </div>
        </div>

        <div className='projects-content__btn-container'>
          <a className='projects-content__btn-purple-bg'
            href='https://github.com/JoaoEduardoRRocha/Food-Explorer-Frontend'
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={25}
            />
            Frontend
          </a>
          <a className='projects-content__btn-purple-bg'
            href='https://github.com/JoaoEduardoRRocha/Food-Explorer-Backend'
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={25}
            />
            Backend
          </a>
        </div>
      </div>

      <div className='projects-content'>
        <div className='projects-content__header'>
          <img
            className='projects-content__img-project'
            src="https://64.media.tumblr.com/e2bbb61ce41269431f65773858cc036e/4131735f64b7c0e4-ee/s2048x3072/907cd21247e6031b09695fa3906ebe40b0c8996d.pnj"
            alt="Logo Impavitta"
          />
          <div className='projects-content__title-container'>
            <h3 className='projects-content__title'>Impávitta</h3>
            <div className='projects-content__subtitle-frontend'>
              FRONTEND
            </div>
          </div>
        </div>
        <p className='projects-content__text'>
          Landing page que desenvolvi para ajudar a impulsionar
          o crescimento e o sucesso de negócios online.  Criei
          uma página de destino que não apenas atrai os visitantes,
          mas os converte em clientes fiéis, que era a proposta do projeto.
        </p>

        <div className='projects-content__tecnology-icons'>
          <legend className='projects-content__tecnology'>TECNOLOGIAS UTILIZADAS:</legend>
          <div className='projects-content__icons'>
            <SiTypescript
              size={35}
            />
            <FaReact
              size={35}
            />
            <FaCss3Alt
              size={35}
            />
            <SiSwiper
              size={35}
            />
          </div>
        </div>

        <div className='projects-content__btn-container'>
          <a className='projects-content__btn-orange-bg'
            href='https://github.com/JoaoEduardoRRocha/Impavitta-Rework'
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className='icon-color'
              size={25}
            />
            Github
          </a>
          <a className='projects-content__btn-orange-bg'
            href='https://impavitta.com.br/'
            target="_blank"
            rel="noreferrer"
          >
            <MdArrowOutward
              className='icon-color'
              size={25}
            />
            Deploy
          </a>
        </div>
      </div>

      <div className='projects-content'>
        <div className='projects-content__header'>
          <img
            className='projects-content__img-project'
            src="https://64.media.tumblr.com/22c718103f5bf8a76d3bf8d18da9023b/f506969facba5c48-96/s540x810/a570b81daeba2ff4e33d7b9c5c42f75417f64799.pnj"
            alt="Logo Netflix"
          />
          <div className='projects-content__title-container'>
            <h3 className='projects-content__title'>Netflix</h3>
            <div className='projects-content__subtitle-frontend'>
              FRONTEND
            </div>
          </div>
        </div>
        <p className='projects-content__text'>
          Este projeto é uma recriação da famosa plataforma de streaming de vídeo, Netflix.
          Adotei um design responsivo e amigável ao usuário, proporcionando uma experiência
          de navegação em dispositivos desktop e móveis.
        </p>

        <div className='projects-content__tecnology-icons'>
          <legend className='projects-content__tecnology'>TECNOLOGIAS UTILIZADAS:</legend>
          <div className='projects-content__icons'>
            <IoLogoJavascript
              size={35}
            />
            <FaReact
              size={35}
            />
            <TbApi
              size={35}
            />
            <FaCss3Alt
              size={35}
            />
          </div>
        </div>

        <div className='projects-content__btn-container'>
          <a className='projects-content__btn-red-bg'
            href='https://github.com/JoaoEduardoRRocha/Netflix-Clone'
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className='icon-color'
              size={25}
            />
            Github
          </a>
          <a className='projects-content__btn-red-bg'
            href='https://devjoaorocha-react-project.vercel.app/'
            target="_blank"
            rel="noreferrer"
          >
            <MdArrowOutward
              className='icon-color'
              size={25}
            />
            Deploy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
