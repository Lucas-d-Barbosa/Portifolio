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
        <FaHtml5 aria-label="HTML" title="HTML" />
      </Skill>
      <Skill nome="CSS">
        <FaCss3Alt aria-label="CSS" title="CSS" />
      </Skill>
      <Skill nome="JavaScript">
        <IoLogoJavascript aria-label="JavaScript" title="JavaScript" />
      </Skill>
      <Skill nome="TypeScript">
        <SiTypescript aria-label="TypeScript" title="TypeScript" />
      </Skill>
      <Skill nome="Angular">
        <FaAngular aria-label="Angular" title="Angular" />
      </Skill>
      <Skill nome="React">
        <FaReact aria-label="React" title="React" />
      </Skill>
      <Skill nome="Vue">
        <FaVuejs aria-label="Vue.js" title="Vue.js" />
      </Skill>
      <Skill nome="PHP">
        <DiPhp aria-label="PHP" title="PHP" />
      </Skill>
      <Skill nome="Laravel">
        <FaLaravel aria-label="Laravel" title="Laravel" />
      </Skill>
      <Skill nome="Java">
        <FaJava aria-label="Java" title="Java" />
      </Skill>
      <Skill nome="Spring Boot">
        <BiLogoSpringBoot aria-label="Spring Boot" title="Spring Boot" />
      </Skill>
      <Skill nome="MySQL">
        <SiMysql aria-label="MySQL" title="MySQL" />
      </Skill>
    </Section>
  );
}
