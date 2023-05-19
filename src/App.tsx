import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Form from "./components/home";
import { Route, Routes } from "react-router-dom";
import Interfaces from "./components/interfaces";
import Departments from "./components/departments";

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

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
