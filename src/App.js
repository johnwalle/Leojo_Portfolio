import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
    </Router>

  );
}

export default App;
