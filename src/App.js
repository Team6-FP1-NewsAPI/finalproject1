import "./App.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Indonesia from "./pages//indonesia/Indonesia";
import Programming from "./pages/programming/Programming";
import Covid from "./pages/covid/Covid";
import Saved from "./pages/saved/Saved";
import IndonesiaNews from "./pages/indonesia/IndonesiaNews";
import ProgrammingNews from "./pages/programming/ProgrammingNews";
import CovidNews from "./pages/covid/CovidNews";

function App({ search }) {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/saved" element={<Saved />} />
        <Route path={`/search/${search}`} element={<IndonesiaNews category={`${search}`} />} />
        <Route path={`/search/${search}`} element={<ProgrammingNews category={`${search}`} />} />
        <Route path={`/search/${search}`} element={<CovidNews category={`${search}`} />} />
        <Route path={`/search/${search}`} element={<Saved category={`${search}`} />} />
      </Routes>
    </div>
  );
}

export default App;
