import { BsClockHistory } from "react-icons/bs";
import {
  FaComments,
  FaUsers,
  FaRegCalendarCheck,
  FaBrain,
} from "react-icons/fa";
import {
  GiMountainClimbing,
  GiHeartInside,
  GiPuzzle,
  GiLaurelsTrophy,
} from "react-icons/gi";
import { IoEarOutline } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import Section from "../Section/Section";
import Skill from "../Skill/Skill";

export default function SoftSkills() {
  return (
    <Section title="Soft Skills" id="soft-skills">
      <Skill nome="Comunicação">
        <FaComments aria-label="Comunicação" title="Comunicação" />
      </Skill>
      <Skill nome="Trabalho em Equipe">
        <FaUsers aria-label="Trabalho em Equipe" title="Trabalho em Equipe" />
      </Skill>
      <Skill nome="Proatividade">
        <MdOutlineLightbulb aria-label="Proatividade" title="Proatividade" />
      </Skill>
      <Skill nome="Resiliência">
        <GiMountainClimbing aria-label="Resiliência" title="Resiliência" />
      </Skill>
      <Skill nome="Organização">
        <FaRegCalendarCheck aria-label="Organização" title="Organização" />
      </Skill>
      <Skill nome="Empatia">
        <GiHeartInside aria-label="Empatia" title="Empatia" />
      </Skill>
      <Skill nome="Pensamento Crítico">
        <FaBrain aria-label="Pensamento Crítico" title="Pensamento Crítico" />
      </Skill>
      <Skill nome="Gestão de Tempo">
        <BsClockHistory aria-label="Gestão de Tempo" title="Gestão de Tempo" />
      </Skill>
      <Skill nome="Adaptabilidade">
        <GiPuzzle aria-label="Adaptabilidade" title="Adaptabilidade" />
      </Skill>
      <Skill nome="Escuta Ativa">
        <IoEarOutline aria-label="Escuta Ativa" title="Escuta Ativa" />
      </Skill>
      <Skill nome="Ética Profissional">
        <RiShieldCheckLine
          aria-label="Ética Profissional"
          title="Ética Profissional"
        />
      </Skill>
      <Skill nome="Liderança">
        <GiLaurelsTrophy aria-label="Liderança" title="Liderança" />
      </Skill>
    </Section>
  );
}
