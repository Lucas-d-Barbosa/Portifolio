import Project from "../Project/Project";
import Section from "../Section/Section";
import projeto1Img1 from "../../assets/images/project-pomodoro-1.png";
import projeto1Img2 from "../../assets/images/project-pomodoro-2.png";
import projeto1Img3 from "../../assets/images/project-pomodoro-3.png";
export default function Projects() {
  return (
    <Section title="Meus Projetos" id="projetos">
      <Project
        nameProject="Chronos Pomodoro"
        linkGithub="https://github.com/Lucas-d-Barbosa/chronos-pomodoro"
        linkHospedagem="https://chronos-pomodoro-three.vercel.app/"
        descricao="O Chronos Pomodoro é um aplicativo web que aplica a técnica
              Pomodoro para ajudar na gestão do tempo. Desenvolvido com React,
              ele permite configurar ciclos de foco e pausa, promovendo
              produtividade com uma interface moderna e responsiva."
        urlImg={projeto1Img1}
        urlImgArray={[projeto1Img1, projeto1Img2, projeto1Img3]}
      />
    </Section>
  );
}
