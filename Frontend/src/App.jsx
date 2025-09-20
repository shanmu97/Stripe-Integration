import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import Rules from './pages/Rules';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-ivory flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
