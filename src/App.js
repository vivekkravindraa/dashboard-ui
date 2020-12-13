import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Axios from 'axios';

function App() {
  const colorMode = useSelector(state => state.toggle.colorMode);
  const [ cardItems, setCardItems ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    Axios.get(`/data/cards.json`)
    .then((res) => {
      let timer1 = setTimeout(() => {
        setCardItems(res.data);
        setIsLoaded(true);
      }, 2000)
      return () => clearTimeout(timer1);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return  (
    <div style={{ paddingTop: 70, backgroundColor: !colorMode ? '#FFFFFF' : '#242424' }}>
      <Filters />
      <div style={{ minHeight: 346 }}>
        <div style={{
          display: `${!isLoaded ? 'block' : 'none'}`,
          margin: '0 auto',
          position: 'absolute',
          top: 280,
          left: '50%',
          marginLeft: '-15px'
        }}>
          <Spinner animation="grow" variant="warning" />
          <p style={{ display: `${!isLoaded ? 'block' : 'none'}`, color: "orange", marginLeft: '-15px' }}>
            Loading...
          </p>
        </div>
        <Cards cardItems={cardItems} />
      </div>
      <Charts />
    </div>
  );
}

export default App;
