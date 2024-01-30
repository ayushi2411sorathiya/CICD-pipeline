import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './jsx/components/Index';
import Home from './jsx/components/Home';
import About from './jsx/components/About';
import Contact from './jsx/components/Contact';

function App() {
  return (
    <div className="App">
      <Index />

      <Routes>
        <Route exact path='/CICD-pipeline' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
