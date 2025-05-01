import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportForm from './pages/ReportForm';
import MapView from './pages/MapView';
import ReportList from './pages/ReportList';
import reports from './data/reports';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<ReportForm />} />
      <Route path="/map" element={<MapView reports={reports} />} />
      <Route path="/reports" element={<ReportList />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
