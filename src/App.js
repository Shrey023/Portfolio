import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShreyashPortfolio from './pages/ShreyashPortfolio';
import ShreyRaiPortfolio from './pages/ShreyRaiPortfolio';
import OmkarPortfolio from './pages/OmkarPortfolio';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shreyash" element={<ShreyashPortfolio />} />
              <Route path="/shrey" element={<ShreyRaiPortfolio />} />
              <Route path="/omkar" element={<OmkarPortfolio />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
