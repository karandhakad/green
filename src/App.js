import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import CardList from './components/CardList'
import ShowCard from './components/ShowCard';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/card-list" element={<CardList />}/>
            <Route path="/show-card/:cardId" element={<ShowCard />}/>
          </Routes>
        </div>
  );
}

export default App;
