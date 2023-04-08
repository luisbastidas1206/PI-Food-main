import "./App.css";
import Detail from "./componets/Detail/Detail";
import Form from "./componets/Form/Form";
import Home from "./componets/Home/Home";
import LandingPage from "./componets/LandingPage/LandingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./componets/NavBar/NavBar";
import About from "./componets/Abaut/About";


function App() {
  const location = useLocation()
  return (
    <div>
      <div>
        {location.pathname === "/" ? null : <NavBar />}
      </div>

      <div>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/creating" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/abaut" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
