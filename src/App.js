import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Highlights from './Components/Highlights/Highlights'
import { useEffect, useState } from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import axios from 'axios';
import FullVideo from './Components/FullVideo/FullVideo'

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://www.scorebat.com/video-api/v3/feed/?token=OTEyOTZfMTY4NjM4MDQ3OV9lM2UyOTNiZGM1NmIwYjU1YjM4NTAxZTQ4MDc5YTkzMDk2MWE1ODIz');
        setData(res.data);
      }
      catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // Get current post 
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCard = data.response?.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home highlights={data} loading={loading}></Home>}></Route>
        <Route path='/highlights' element={<Highlights highlights={currentCard} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} totalCard={data.response} loading={loading}></Highlights>}></Route>
        <Route path='/watch_highlight/:something' element={<FullVideo highlights={data} loading={loading}></FullVideo>}></Route>
        <Route path='/about' element={<About loading={loading}></About>}></Route>
        <Route path='/contact' element={<Contact loading={loading}></Contact>}></Route>
        <Route path='*' element={<NotFound loading={loading}></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;