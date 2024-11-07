import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateCrewmate from './components/CreateCrewmate';
import CrewmateGallery from './components/CrewmateGallery';
import CrewmateDetails from './components/CrewmateDetails';
import UpdateCrewmate from './components/UpdateCrewmate';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create a Crewmate</Link></li>
            <li><Link to="/gallery">Crewmate Gallery</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateCrewmate />} />
            <Route path="/gallery" element={<CrewmateGallery />} />
            <Route path="/crewmate/:id" element={<CrewmateDetails />} />
            <Route path="/update/:id" element={<UpdateCrewmate />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;