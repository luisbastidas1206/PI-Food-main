import  "./App.css";
import Detail from "./componets/Detail/Detail";
import Form from "./componets/Form/Form";
import Home from "./componets/Home/Home";
import LandingPage from "./componets/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
 
      <div>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
