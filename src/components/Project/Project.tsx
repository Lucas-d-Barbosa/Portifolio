import { useState } from "react";
import styles from "./Project.module.css";
import { XIcon } from "lucide-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // ⬅️ ícones adicionados

type ProjectProps = {
  nameProject: string;
  linkGithub: string;
  descricao: string;
  linkHospedagem?: string;
  urlImg: string;
  urlImgArray: string[];
};

export default function Project({
  nameProject,
  linkGithub,
  linkHospedagem,
  descricao,
  urlImg,
  urlImgArray,
}: ProjectProps) {
  const [showProject, setShowProject] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  function handleShowProject() {
    setShowProject((prevState) => !prevState);
  }

  function handleCloseShowProject() {
    setShowProject(false);
    setSlideIndex(0);
  }

  function nextSlide() {
    setSlideIndex((prevIndex) =>
      prevIndex + 1 < urlImgArray.length ? prevIndex + 1 : 0
    );
  }

  function prevSlide() {
    setSlideIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : urlImgArray.length - 1
    );
  }

  return (
    <>
      <div
        className={styles.project}
        aria-label={`Projeto ${nameProject}`}
        title={`Projeto ${nameProject}`}
        onClick={handleShowProject}
      >
        <div className={styles.containerImg}>
          <img src={urlImg} alt={`Imagem do projeto ${nameProject}`} />
        </div>
        <h2>{nameProject}</h2>
      </div>

      <div
        className={`${styles.projectDisable} ${
          showProject ? styles.showProject : ""
        }`}
        aria-label={`Projeto ${nameProject}`}
        title={`Projeto ${nameProject}`}
      >
        <button onClick={handleCloseShowProject}>
          <XIcon />
        </button>
        <div>
          <h2>{nameProject}</h2>
        </div>
        <div className={styles.infosProjects}>
          {urlImgArray.length > 0 && (
            <div className={styles.slideContainer}>
              <img
                src={urlImgArray[slideIndex]}
                alt={`Slide ${slideIndex + 1}`}
                className={`${styles.slideImage} ${styles.slideImageFix}`} // ⬅️ aqui
              />

              <button className={styles.arrowLeft} onClick={prevSlide}>
                <FiChevronLeft size={32} />
              </button>
              <button className={styles.arrowRight} onClick={nextSlide}>
                <FiChevronRight size={32} />
              </button>
            </div>
          )}

          <div className={styles.areaTexto}>
            <h4>Descrição:</h4>
            <p>{descricao}</p>
            <div className={styles.containerBtn}>
              {linkHospedagem && (
                <button>
                  <a href={linkHospedagem}>Projeto Online</a>
                </button>
              )}
              <button>
                <a href={linkGithub}>GitHub do Projeto</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
