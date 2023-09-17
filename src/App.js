import "./App.css";
import Home from "./pages/Home Page/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./pages/Team Page/Team.jsx";
import Bootcamp from "./pages/Bootcamp Page/Bootcamp.js";
import Launchpad from "./pages/Launchpad Page/Launchpad";
import VC3 from "./pages/VC3 Page/VC3";
import Summit from "./pages/Summit Page/Summit";
import Breakthrough from "./pages/Breakthrough Page/Breakthrough";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "auto",
        width: "100%",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/team" element={<Team />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/breakthrough" element={<Breakthrough />} />
          <Route path="/summit" element={<Summit />} />
          <Route path="/vc3" element={<VC3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
