import React, { useState } from "react";
import "../css/MainComponents.css"; // Importar o CSS para o cabeçalho
import images from "../shared/Banner/import"; // Corrigir a importação se necessário
import Slider from "react-slick"; // Importar o Slider
import "slick-carousel/slick/slick.css"; // Importar CSS do Slick
import "slick-carousel/slick/slick-theme.css"; // Importar tema do Slick
import DepoimentoScreen from '../screen/DepoimentoScreen';
import BlogLayout from "../screen/BlogLayout";
import TrabalheConosco from "../screen/TrabalheScreen";
import Contato from "../screen/ContatoScreen";

const MainComponents = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar a expansão do texto

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); // Alterna o estado de expansão
  };

  const carouselSettings = {
    dots: true, // Mostrar pontos de navegação
    infinite: true, // Permitir looping
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Quantidade de slides mostrados
    slidesToScroll: 1, // Quantidade de slides a serem rolados por vez
    autoplay: true, // Ativar autoplay
    autoplaySpeed: 3000, // Tempo de espera entre as transições
    arrows: true, // Sem setas de navegação
    fade: true, // Ativar transição suave
  };

  const partnerCarouselSettings = {
    infinite: true, // Loop infinito
    speed: 5000, // Velocidade da rotação
    slidesToShow: 5, // Quantidade de empresas mostradas por vez
    slidesToScroll: 1, // Quantidade de slides a serem rolados por vez
    autoplay: true, // Autoplay ativado
    autoplaySpeed: 2000, // Troca de slide a cada 2 segundos
    arrows: false, // Sem setas de navegação
    cssEase: "linear", // Roda suavemente e continuamente
    pauseOnHover: false, // Continua rodando mesmo ao passar o mouse
  };

  const serviceCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mude para 3 para mostrar 3 cards ao mesmo tempo
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Exibir 2 cards em telas menores
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Exibir 1 card em telas ainda menores
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="main">
      <Slider {...carouselSettings}>
        <div>
          <img
            src={images.bombeiro}
            alt="Bombeiro"
            className="responsive-image"
          />
        </div>
        <div>
          <img
            src={images.cozinha}
            alt="Cozinha"
            className="responsive-image"
          />
        </div>
        <div>
          <img
            src={images.cientista}
            alt="Cientista"
            className="responsive-image"
          />
        </div>
        <div>
          <img
            src={images.logistica}
            alt="Logística"
            className="responsive-image"
          />
        </div>
        <div>
          <img src={images.medica} alt="Médica" className="responsive-image" />
        </div>
      </Slider>

      {/* Seção Sobre Nós */}
      <section className="about-us">
        <div className="about-text">
          <h2>Por que nosso nome é Sinergia?</h2>
          <p>
            Na SinergiaRH, acreditamos que "sinergia" é um conceito central e
            vital para a nossa missão e práticas diárias, o que representa a
            combinação harmoniosa de elementos que, ao se unirem, produzem um
            efeito maior do que a soma das suas partes individuais. Aqui está
            como aplicamos esse conceito em nossas atividades:
          </p>
          <p>
            {isExpanded
              ? `Colaboração Eficiente: Trabalhamos em estreita colaboração com nossos clientes, entendendo suas
              necessidades e objetivos, para desenvolver soluções de RH que realmente façam a diferença. Essa parceria
              resulta em processos mais eficientes e eficazes.

              Alinhamento Estratégico: Alinhamos as práticas de recursos humanos com os objetivos estratégicos das empresas,
              garantindo que todos os esforços estejam direcionados para o crescimento e sucesso organizacional.

              Engajamento e Motivação: Criamos estratégias que promovem o engajamento e a motivação dos colaboradores,
              contribuindo para um ambiente de trabalho positivo e produtivo.

              Desenvolvimento Integrado: Oferecemos programas de desenvolvimento que abrangem desde o recrutamento até a
              gestão de talentos, assegurando que todos os níveis da organização estejam alinhados e comprometidos com os
              mesmos objetivos.

              Resultados Otimizados: A combinação de nossos serviços - desde a implantação de cultura de RH, gestão de
              cargos e salários, até terceirização de mão de obra - resulta em uma abordagem holística que otimiza os
              resultados para nossos clientes.`
              : `Colaboração Eficiente: Trabalhamos em estreita colaboração com nossos clientes, entendendo suas
              necessidades e objetivos, para desenvolver soluções de RH que realmente façam a diferença. Essa parceria
              resulta em processos mais eficientes e eficazes.

              Alinhamento Estratégico: Alinhamos as práticas de recursos humanos com os objetivos estratégicos das empresas, 
              garantindo que todos os esforços estejam direcionados para o crescimento e sucesso organizacional. 
              ...`}{" "}
            {/* Mostrar texto cortado ou expandido */}
          </p>
          <button onClick={toggleReadMore} className="read-more-button">
            {isExpanded ? "Ler menos" : "Ler mais"}
          </button>
        </div>
        <div className="about-image">
          <img
            src={images.about}
            alt="Imagem representativa"
            className="responsive-image"
          />{" "}
          {/* Substitua suaImagem pela imagem que deseja mostrar */}
        </div>
      </section>

      {/* Seção de Apresentação dos Membros */}
      <section className="team-section">
        <h2>Nossa Equipe</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={images.membro1} alt="Membro 1" className="team-photo" />
            <h3>João Silva</h3>
            <p>
              Especialista em Gestão de Pessoas com mais de 15 anos de
              experiência em Recursos Humanos e Desenvolvimento Organizacional.
            </p>
          </div>
          <div className="team-member">
            <img src={images.membro2} alt="Membro 2" className="team-photo" />
            <h3>Maria Oliveira</h3>
            <p>
              Consultora Sênior em Estratégias de Negócios, com expertise em
              Planejamento Estratégico e Gestão Financeira.
            </p>
          </div>
          <div className="team-member">
            <img src={images.membro3} alt="Membro 3" className="team-photo" />
            <h3>Carlos Pereira</h3>
            <p>
              Profissional de Marketing com foco em Branding e Comunicação
              Corporativa, ajudando empresas a construir marcas fortes.
            </p>
          </div>
          {/* Adicione mais membros conforme necessário */}
        </div>
      </section>

      {/* Carrossel de Empresas Parceiras */}
      <section className="partners-carousel">
        <h2>Empresas Parceiras</h2>
        <Slider {...partnerCarouselSettings}>
          <div>
            <img
              src={images.empresa1}
              alt="Parceiro 1"
              className="partner-image"
            />
          </div>
          <div>
            <img
              src={images.empresa2}
              alt="Parceiro 2"
              className="partner-image"
            />
          </div>
          <div>
            <img
              src={images.empresa3}
              alt="Parceiro 3"
              className="partner-image"
            />
          </div>
          <div>
            <img
              src={images.empresa4}
              alt="Parceiro 4"
              className="partner-image"
            />
          </div>
          <div>
            <img
              src={images.empresa5}
              alt="Parceiro 5"
              className="partner-image"
            />
          </div>
          <div>
            <img
              src={images.empresa6}
              alt="Parceiro 6"
              className="partner-image"
            />
          </div>
          {/* Adicione mais empresas parceiras conforme necessário */}
        </Slider>
      </section>

      {/* Seção Nossos Valores e Nossa Missão */}
      <section className="values-mission-section">
        <div className="values-mission-container">
          {/* Seção Nossos Valores */}
          <div className="values-section">
            <h2>Nossos Valores</h2>
            <ul>
              <li>
                <strong>Comprometimento:</strong> Estamos empenhados em entregar
                soluções de alta qualidade que superem as expectativas de nossos
                clientes e candidatos.
              </li>
              <li>
                <strong>Transparência:</strong> Valorizamos a comunicação aberta
                e honesta, garantindo clareza em todas as etapas do processo.
              </li>
              <li>
                <strong>Inovação:</strong> Utilizamos as melhores práticas e
                tecnologias avançadas para otimizar nossos serviços e oferecer
                uma experiência diferenciada.
              </li>
              <li>
                <strong>Parceria:</strong> Trabalhamos em estreita colaboração
                com nossos clientes e candidatos, entendendo suas necessidades e
                construindo relacionamentos duradouros.
              </li>
              <li>
                <strong>Ética:</strong> Mantemos os mais altos padrões éticos em
                todas as nossas ações, respeitando a confidencialidade e a
                integridade de todos os envolvidos.
              </li>
            </ul>
          </div>

          {/* Seção Nossa Missão */}
          <div className="mission-section">
            <h2>Nossa Missão</h2>
            <p>
              Nossa missão é prestar serviços de Consultoria em RH de forma
              estratégica e alinhada às necessidades de nossos parceiros e
              clientes. Acreditamos que o capital humano é o maior diferencial
              competitivo e, por isso, dedicamos nossos esforços para garantir
              que cada contratação seja uma SINERGIA perfeita entre as
              expectativas das empresas e as aspirações dos profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* Carrossel de Serviços */}
      {/* Carrossel de Serviços */}
      <section className="services-section">
        <h2>Nossos Serviços</h2>
        <Slider {...serviceCarouselSettings}>
          <div className="service-card">
            <h3>Processos Seletivos</h3>
            <p>
              Conduzimos processos de Recrutamento e Seleção de talentos para
              diversas áreas e níveis hierárquicos.
            </p>
            <h4>Processo:</h4>
            <p>
              Aplicamos metodologias de entrevistas e avaliações personalizadas.
            </p>
            <h4>Resultados Esperados:</h4>
            <p>Contratações mais adequadas às necessidades das empresas.</p>
            <h4>Casos de Sucesso:</h4>
            <p>
              Aumentamos a retenção de talentos em 30% para nossos clientes.
            </p>
          </div>

          <div className="service-card">
            <h3>Implantação de Cultura de RH</h3>
            <p>
              Ajudamos a estabelecer e fortalecer a cultura organizacional,
              alinhando-a aos objetivos estratégicos da empresa.
            </p>
            <h4>Processo:</h4>
            <p>Realizamos workshops e treinamentos para todos os níveis.</p>
            <h4>Resultados Esperados:</h4>
            <p>Ambiente de trabalho positivo e colaborativo.</p>
            <h4>Casos de Sucesso:</h4>
            <p>
              Reduzimos a rotatividade de funcionários em 25% em empresas
              parceiras.
            </p>
          </div>

          <div className="service-card">
            <h3>Gestão de Cargos e Salários</h3>
            <p>
              Desenvolvemos e implementamos planos de cargos e salários,
              garantindo equidade e competitividade no mercado.
            </p>
            <h4>Processo:</h4>
            <p>Analisamos o mercado e estabelecemos estruturas de cargos.</p>
            <h4>Resultados Esperados:</h4>
            <p>Equidade salarial e maior motivação dos colaboradores.</p>
            <h4>Casos de Sucesso:</h4>
            <p>Aumentamos a satisfação dos colaboradores em 40%.</p>
          </div>

          <div className="service-card">
            <h3>Desenvolvimento Organizacional</h3>
            <p>
              Promovemos iniciativas que visam o crescimento sustentável da
              organização, melhorando processos e estruturas.
            </p>
            <h4>Processo:</h4>
            <p>Avaliamos e otimizamos os processos internos.</p>
            <h4>Resultados Esperados:</h4>
            <p>Aumento da eficiência operacional e redução de custos.</p>
            <h4>Casos de Sucesso:</h4>
            <p>
              Melhoria de 30% na eficiência operacional em empresas atendidas.
            </p>
          </div>

          <div className="service-card">
            <h3>Endomarketing</h3>
            <p>
              Criamos estratégias de comunicação interna para engajar e motivar
              colaboradores.
            </p>
            <h4>Processo:</h4>
            <p>Desenvolvemos campanhas internas e eventos motivacionais.</p>
            <h4>Resultados Esperados:</h4>
            <p>Aumento do engajamento e da satisfação dos colaboradores.</p>
            <h4>Casos de Sucesso:</h4>
            <p>Aumento do engajamento dos colaboradores em 35%.</p>
          </div>

          {/* Adicione mais cards conforme necessário */}
        </Slider>
      </section>
      <DepoimentoScreen/>

      <BlogLayout/>

      <TrabalheConosco/>

      <Contato/>


     
    </main>
  );
};

export default MainComponents;
