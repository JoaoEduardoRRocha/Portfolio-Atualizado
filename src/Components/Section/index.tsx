import React from 'react'
import "./index.css";
import Project from '../Project'

const Section: React.FC = () => {

  return (
    <section className="section-content">
      <h3 className="section-content__title-about-me">
        Sobre mim
      </h3>
      <div className="section-content__about-me">
        <p className="section-content__about-me__paragraph">
          Com 24 anos de idade, mergulhei no mundo da programação.
          Desde então, cada linha de código se tornou uma fonte de fascínio,
          transformando-se em aplicações funcionais e impactantes.
        </p>
        <p className="section-content__about-me__paragraph">
          A pandemia trouxe mudanças significativas, e aproveitei a oportunidade
          para direcionar totalmente minha dedicação para a área de desenvolvimento.
          Atualmente, sou um Desenvolvedor Front-End, especializado nas tecnologias React e TypeScript
        </p>
      </div>

      <h3 className="section-content__title-education">
        Formação
      </h3>

      <div className="section-content__education">
        <p className="section-content__education__legend">
          Trilha Explorer - Desenvolvimento Web Fullstack
        </p>
        <p className="section-content__education__institution">
          Instituição: Rocketseat
        </p>
        <p className="section-content__education__conclusion">
          Conclusão: outubro/2023;
        </p>

        <details className='section-content__details'>
          <summary>Saiba Mais</summary>
          <ul>
            <legend className='section-content__details__summary-title'>Tópicos Abordados:</legend>
            <li>- Fundamentos de lógica de programação</li>
            <li>- Desenvolvimento web com HTML, CSS e JavaScript</li>
            <li>- Introdução ao ReactJS e desenvolvimento de interfaces web interativas</li>
            <li>- Introdução ao Node.js e construção de APIs RESTful</li>
            <li>- Banco de dados com MongoDB e Mongoose</li>
            <li>- Versionamento de código com Git e GitHub</li>
            <li>- Metodologias ágeis e boas práticas de desenvolvimento de software</li>
          </ul>
        </details>
      </div>

      <div className="section-content__education">
        <p className="section-content__education__legend">
          Introdução à Ciência da Computação
        </p>
        <p className="section-content__education__institution">
          Instituição: Fundação Escolar (Curso de Harvard)
        </p>
        <p className="section-content__education__conclusion">
          Conclusão: fevereiro/2023;
        </p>

        <details className='section-content__details'>
          <summary>Saiba Mais</summary>
          <ul>
            <legend className='section-content__details__summary-title'>Tópicos Abordados:</legend>
            <li>- Fundamentos de programação e lógica de programação</li>
            <li>- Estruturas de dados e algoritmos</li>
            <li>- Introdução à linguagem de programação C</li>
            <li>- Desenvolvimento web com HTML, CSS e JavaScript</li>
            <li>- Pensamento computacional e resolução de problemas</li>
          </ul>
        </details>
      </div>

      <div className="section-content__education">
        <p className="section-content__education__legend">
          Introdução à Tecnologia
        </p>
        <p className="section-content__education__institution">
          Instituição: Rocketseat
        </p>
        <p className="section-content__education__conclusion">
          Conclusão: junho/2022;
        </p>

        <details className='section-content__details'>
          <summary>Saiba Mais</summary>
          <ul>
            <legend className='section-content__details__summary-title'>Tópicos Abordados:</legend>
            <li>Fundamentos da Programação</li>
            <li>Desenvolvimento web com HTML, CSS e JavaScript</li>
            <li>Introdução ao ReactJS</li>
            <li>Introdução ao Node.js</li>
            <li>Introdução ao TypeScript</li>
          </ul>
        </details>
      </div>

      <Project />
    </section>
  );
};

export default Section;
