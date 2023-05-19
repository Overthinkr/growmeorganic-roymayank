import "./App.css";
import Form from "./components/home";
import { Route, Routes } from "react-router-dom";
import Interfaces from "./components/interfaces";
import Departments from "./components/departments";

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
