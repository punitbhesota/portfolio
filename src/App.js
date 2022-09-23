import "./App.css";
import { Routes, Route } from "react-router-dom";
import Project from "./Pages/Project/Project";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="home" element={<Main />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
