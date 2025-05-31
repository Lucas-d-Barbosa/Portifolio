import "./styles/global.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import LazyComponent from "./components/LazyComponent/LazyComponent.tsx";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Hero></Hero>
      <LazyComponent
        loader={() => import("./components/SoftSkills/SoftSkills")}
        fallback={<div></div>}
      />
      <LazyComponent
        loader={() => import("./components/HardSkills/HardSkills")}
        fallback={<div></div>}
      />
      <LazyComponent
        loader={() =>
          import("./components/AcademicBackground/AcademicBackground")
        }
        fallback={<div></div>}
      />
      <LazyComponent
        loader={() =>
          import("./components/ProfessionalExperience/ProfessionalExperience")
        }
        fallback={<div></div>}
      />
      <LazyComponent
        loader={() => import("./components/Projects/Projects")}
        fallback={<div></div>}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
