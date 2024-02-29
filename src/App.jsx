import { Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";

import "./app.scss";

function App() {

  return (
    <div className="App">
      <Header/>
     <div className="routes-wrapper">

      <Routes>
        <Route>
          {/* <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
     </div>
    </div>
  );
}

export default App;
