import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
