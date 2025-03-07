import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trainings from "./pages/Trainings";
import Jobs from "./pages/Jobs";
import CPF from "./pages/CPF";
import School from "./pages/School"; // Add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/cpf" element={<CPF />} />
        <Route path="/school" element={<School />} /> {/* Add this */}
      </Routes>
    </Router>
  );
}

export default App;
