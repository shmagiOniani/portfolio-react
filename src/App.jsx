import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";

import "./app.scss";
import { Header } from "./shared/components";
// import { Affix } from "antd";

function App() {
  return (
    <div className="App">
        <Header />
      <div className="routes-wrapper">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            {/* <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
