import "./App.css";
import Form from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Interfaces from "./pages/Interfaces/interfaces";
import Departments from "./pages/Departments/departments";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/interfaces" element={<Interfaces />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
