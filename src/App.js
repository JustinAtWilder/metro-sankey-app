import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sankey from './components/Sankey';
import NursingSankey from './components/NursingSankey';
import AccountingSankey from './components/AccountingSankey';
import CybersecuritySankey from './components/CybersecuritySankey';
import MentalHealthPractitionerSankey from './components/MentalHealthPractitionerSankey';
import EducationSankey from './components/EducationSankey';
import RadialBarChart from './components/RadialBarChart';
import CareerCompetencies from './components/CareerCompetencies';
import FieldOfStudyPage from "./components/FieldOfStudyPage";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

// Add a global style for gridjs to use Montserrat
const style = document.createElement('style');
style.textContent = `
  .gridjs-wrapper, .gridjs-table, .gridjs-th, .gridjs-td, 
  .gridjs-search-input, .gridjs-pagination {
    font-family: 'Montserrat', sans-serif !important;
  }
`;
document.head.appendChild(style);

function App() {
  return (
    <div className="App">
          <Router>
      <Routes>
        <Route path="/" element={<Sankey />} />
        <Route path="/nursing" element={<NursingSankey />} />
        <Route path="/accounting" element={<AccountingSankey />} />
        <Route path="/cybersecurity" element={<CybersecuritySankey />} />
        <Route path="/mental-health-practitioner" element={<MentalHealthPractitionerSankey />} />
        <Route path="/education" element={<EducationSankey />} />
        <Route path="/radial-bar-chart" element={<RadialBarChart />} />
        <Route path="/career-competencies" element={<CareerCompetencies />} />
        <Route path="/tables" element={<FieldOfStudyPage />} />

            </Routes>
    </Router>
    </div>
  );
}

export default App;
