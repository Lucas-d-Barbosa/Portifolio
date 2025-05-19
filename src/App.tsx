import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import "./styles/global.css";
import "./styles/variables.css";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default App;
