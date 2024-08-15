import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "./pages/home/Home";

import "./app.scss";
import { Header } from "./shared/components";
import { useEffect } from "react";

function App() {

  useEffect(() => {}, []);

  return (
    <ReactLenis root options={
      {
        lerp:0.1,
        smoothWheel: true
      }
    }>
      <div className="App">
        <Header />
        <div className="routes-wrapper">
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              {/* <Route path="projects" element={<Projects />} />
          <Route patRoute path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
