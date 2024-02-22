import { Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";


import "./app.scss";
import Paralax from "./components/paralax/Paralax";
import Header from "./components/header/Header";
import Projects from "./pages/projects/Projects";

function App() {

  return (
    <div className="App">
      <Header/>
     <Paralax/>
     <div className="routes-wrapper">

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
     </div>
    </div>
  );
}

export default App;
