import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sankey from './components/Sankey';
import NursingSankey from './components/NursingSankey';
import AccountingSankey from './components/AccountingSankey';
import CybersecuritySankey from './components/CybersecuritySankey';
import MentalHealthPractitionerSankey from './components/MentalHealthPractitionerSankey';
import EducationSankey from './components/EducationSankey';
import RadialBarChart from './components/RadialBarChart';
import CareerCompetencies from './components/CareerCompetencies';


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
            </Routes>
    </Router>
    </div>
  );
}

export default App;
