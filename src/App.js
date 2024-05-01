import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
