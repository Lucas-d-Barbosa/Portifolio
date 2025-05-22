import {
  FaUniversity,
  FaLaptopCode,
  FaProjectDiagram,
  FaClipboardList,
  FaCloud,
  FaRobot,
  FaDesktop,
  FaCode,
  FaDatabase,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import InfoBlock from "../InfoBlock/InfoBlock";
import Section from "../Section/Section";

export default function AcademicBackground() {
  return (
    <Section title="Formação Acadêmica" id="formacao">
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
        iconBg={FaLaptopCode} // Pode trocar o ícone se preferir
      >
        <li>
          <FaDesktop style={{ marginRight: "0.5rem" }} />
          Ênfase em montagem, manutenção e configuração de computadores e redes.
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
          Diagnóstico e resolução de problemas técnicos de hardware e software.
        </li>
        <li>
          <FaUsers style={{ marginRight: "0.5rem" }} />
          Trabalho em equipe e práticas profissionais durante a formação
          técnica.
        </li>
      </InfoBlock>
    </Section>
  );
}
