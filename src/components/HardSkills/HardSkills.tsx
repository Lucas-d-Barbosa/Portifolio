import { BiLogoSpringBoot } from "react-icons/bi";
import { DiPhp } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaJava,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMysql } from "react-icons/si";
import Section from "../Section/Section";
import Skill from "../Skill/Skill";

export default function HardSkills() {
  return (
    <Section title="Hard Skills" id="hard-skills">
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
  );
}
