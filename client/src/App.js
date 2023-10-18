import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Register from './pages/Auth/Register';
import Pricing from './pages/Pricing';
import Review from './pages/Review';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/review' element={<Review/>}/>
      <Route path='/sign-in' element={<Register/>}/>
    </Routes>
      
    </>
  );
}

export default App;
