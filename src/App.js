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
import Footer from './components/Footer';

function App() {
  return (
    <div class="overflow-x-clip">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
