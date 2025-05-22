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
  );
}
