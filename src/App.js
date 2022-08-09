import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Models from "./components/Models";
import Model3 from "./components/Model3";
import Modelx from "./components/Modelx";
import Modely from "./components/Modely";
import Roof from "./components/Roof";
import Panel from "./components/Panel";



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/models" element={<Models/>}/>
      <Route path="/model3" element={<Model3/>}/>
      <Route path="/modelx" element={<Modelx/>}/>
      <Route path="/modely" element={<Modely/>}/>
      <Route path="/roofs" element={<Roof/>}/>
      <Route path="/panels" element={<Panel/>}/>
    </Routes>

    </Router>
    

      
    </>
  );
}

export default App;
