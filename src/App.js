// impport routing
import { Route, Routes } from 'react-router-dom';

// import assets and styles
import logo from '../src/assets/logo.svg';
import './App.css';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// import components
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </div>
  );
}

export default App;
