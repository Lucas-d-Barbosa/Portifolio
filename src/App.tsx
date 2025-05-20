import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Skill } from "./components/Skill/Skill";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";

import "./styles/global.css";
import "./styles/variables.css";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Hero></Hero>
      <div className="temporiaria">
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
      </div>
    </div>
  );
}

export default App;
