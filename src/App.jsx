import { Routes, Route } from "react-router-dom";
import { ReactLenis, useLenis } from 'lenis/react'
import Home from "./pages/home/Home";

import "./app.scss";
import { Header } from "./shared/components";
import { useEffect } from "react";


function App() {
 
  const lenis = useLenis(({ scroll }) => {
   
  })

  useEffect(() => {

  }, [])
  
  return (
      <ReactLenis root>
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
        </ReactLenis>
  );
}

export default App;
