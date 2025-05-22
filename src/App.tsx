import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Skill } from "./components/Skill/Skill";
import {
  FaBrain,
  FaBriefcase,
  FaClipboardList,
  FaCloud,
  FaCode,
  FaComments,
  FaDatabase,
  FaDesktop,
  FaLaptopMedical,
  FaLightbulb,
  FaProjectDiagram,
  FaReact,
  FaRegCalendarCheck,
  FaRobot,
  FaTools,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { IoEarOutline, IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

import "./styles/global.css";
import "./styles/variables.css";
import { Section } from "./components/Section/Section";
import { BsClockHistory } from "react-icons/bs";
import {
  GiMountainClimbing,
  GiHeartInside,
  GiLaurelsTrophy,
  GiPuzzle,
} from "react-icons/gi";
import { MdOutlineLightbulb } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { InfoBlock } from "./components/InfoBlock/InfoBlock";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Hero></Hero>
      <Section title="Soft Skills">
        <Skill nome="Comunicação">
          <FaComments />
        </Skill>
        <Skill nome="Trabalho em Equipe">
          <FaUsers />
        </Skill>
        <Skill nome="Proatividade">
          <MdOutlineLightbulb />
        </Skill>
        <Skill nome="Resiliência">
          <GiMountainClimbing />
        </Skill>
        <Skill nome="Organização">
          <FaRegCalendarCheck />
        </Skill>
        <Skill nome="Empatia">
          <GiHeartInside />
        </Skill>
        <Skill nome="Pensamento Crítico">
          <FaBrain />
        </Skill>
        <Skill nome="Gestão de Tempo">
          <BsClockHistory />
        </Skill>
        <Skill nome="Adaptabilidade">
          <GiPuzzle />
        </Skill>
        <Skill nome="Escuta Ativa">
          <IoEarOutline />
        </Skill>
        <Skill nome="Ética Profissional">
          <RiShieldCheckLine />
        </Skill>
        <Skill nome="Liderança">
          <GiLaurelsTrophy />
        </Skill>
      </Section>
      <Section title="Hard Skills">
        <Skill nome="HTML">
          <FaHtml5 />
        </Skill>
        <Skill nome="CSS">
          <FaCss3Alt />
        </Skill>
        <Skill nome="JavaScript">
          <IoLogoJavascript />
        </Skill>
        <Skill nome="TypeScript">
          <SiTypescript />
        </Skill>
        <Skill nome="Angular">
          <FaAngular />
        </Skill>
        <Skill nome="React">
          <FaReact />
        </Skill>
        <Skill nome="Vue">
          <FaVuejs />
        </Skill>
        <Skill nome="PHP">
          <DiPhp />
        </Skill>
        <Skill nome="Laravel">
          <FaLaravel />
        </Skill>
        <Skill nome="Java">
          <FaJava />
        </Skill>
        <Skill nome="Spring Boot">
          <BiLogoSpringBoot />
        </Skill>
        <Skill nome="Spring Boot">
          <SiMysql />
        </Skill>
      </Section>
      <Section
        title="Experiência"
        // subtitle="Experiências que impulsionaram minha evolução como dev"
      >
        <InfoBlock
          titulo="NexTi"
          cargo="Desenvolvedor voluntário"
          periodo="6 meses"
          iconBg={FaBriefcase}
        >
          <li>
            <FaLaptopCode style={{ marginRight: "0.5rem" }} />
            Desenvolvimento de aplicações web internas com foco em melhoria de
            processos acadêmicos.
          </li>
          <li>
            <FaUsers style={{ marginRight: "0.5rem" }} />
            Colaboração com equipe multidisciplinar utilizando metodologias
            ágeis (Scrum).
          </li>
          <li>
            <FaTools style={{ marginRight: "0.5rem" }} />
            Tecnologias usadas: HTML, CSS, Bootstrap 5, JavaScript, PHP, MySQL.
          </li>
          <li>
            <FaLightbulb style={{ marginRight: "0.5rem" }} />
            Aprendizados: Experiência prática com demandas reais, trabalho em
            equipe e comunicação com stakeholders não técnicos.
          </li>
        </InfoBlock>
      </Section>
      <Section title="Formação Acadêmica">
        <InfoBlock
          titulo="Centro Universitário Paraíso"
          cargo="Bacharelado em Sistemas de Informação"
          periodo="Jan 2023 – Em andamento"
          iconBg={FaUniversity}
        >
          <li>
            <FaLaptopCode style={{ marginRight: "0.5rem" }} />
            Desenvolvimento de software com foco em arquitetura e design de
            sistemas.
          </li>
          <li>
            <FaProjectDiagram style={{ marginRight: "0.5rem" }} />
            Modelagem de dados e implementação de soluções tecnológicas.
          </li>
          <li>
            <FaClipboardList style={{ marginRight: "0.5rem" }} />
            Estudo de engenharia de requisitos e análise de sistemas.
          </li>
          <li>
            <FaCloud style={{ marginRight: "0.5rem" }} />
            Tecnologias emergentes, como computação em nuvem.
          </li>
          <li>
            <FaRobot style={{ marginRight: "0.5rem" }} />
            Inteligência artificial aplicada a cenários práticos de mercado.
          </li>
        </InfoBlock>

        <InfoBlock
          titulo="E.E.E.P Irmã Ana Zélia da Fonseca"
          cargo="Técnico em Informática"
          periodo="Jan 2018 – Jan 2021"
          iconBg={FaLaptopMedical} // Pode trocar o ícone se preferir
        >
          <li>
            <FaDesktop style={{ marginRight: "0.5rem" }} />
            Ênfase em montagem, manutenção e configuração de computadores e
            redes.
          </li>
          <li>
            <FaCode style={{ marginRight: "0.5rem" }} />
            Desenvolvimento de aplicações básicas em C, Java, PHP e JavaScript.
          </li>
          <li>
            <FaDatabase style={{ marginRight: "0.5rem" }} />
            Noções fundamentais de banco de dados e segurança da informação.
          </li>
          <li>
            <FaTools style={{ marginRight: "0.5rem" }} />
            Diagnóstico e resolução de problemas técnicos de hardware e
            software.
          </li>
          <li>
            <FaUsers style={{ marginRight: "0.5rem" }} />
            Trabalho em equipe e práticas profissionais durante a formação
            técnica.
          </li>
        </InfoBlock>
      </Section>
    </div>
  );
}

export default App;
