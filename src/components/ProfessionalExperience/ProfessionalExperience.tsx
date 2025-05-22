import {
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";
import InfoBlock from "../InfoBlock/InfoBlock";
import Section from "../Section/Section";

export default function ProfessionalExperience() {
  return (
    <Section title="Experiência" id="experiencia">
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
          Colaboração com equipe multidisciplinar utilizando metodologias ágeis
          (Scrum).
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
  );
}
