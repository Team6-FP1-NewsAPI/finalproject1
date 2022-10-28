import "./App.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Indonesia from "./pages//indonesia/Indonesia";
import Programming from "./pages/programming/Programming";
import Covid from "./pages/covid/Covid";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
