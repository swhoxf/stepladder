// impport routing
import { Route, Routes } from 'react-router-dom';

// import assets and styles
import './App.css';
import './index.css'

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// import components
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
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
