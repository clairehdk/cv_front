import "./App.css";
import Experience from "./components/Experience";
import HeadBlock from "./components/HeadBlock";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const scrollDown = () => {
    window.scrollTo({ top: 688, behavior: "smooth" });
  };
  return (
    <div className="App">
      <HeadBlock scroll={scrollDown} />
      <Skills scroll={scrollDown} />
      <Experience scroll={scrollDown} />
      <Projects />
    </div>
  );
}

export default App;
