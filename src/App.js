import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Highlights from './Components/Highlights/Highlights'
import { useEffect, useState } from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'https://www.scorebat.com/video-api/v3/feed/?token=OTEyOTZfMTY4NjM4MDQ3OV9lM2UyOTNiZGM1NmIwYjU1YjM4NTAxZTQ4MDc5YTkzMDk2MWE1ODIz';
    const options = {
      method: 'GET',
      headers: {}
    };
    async function main() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      }
      catch (error) {
        console.error(error);
      }
    }
    main();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home highlights={data}></Home>}></Route>
        <Route path='/highlights' element={<Highlights highlights={data}></Highlights>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;