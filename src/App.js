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

  if(!isLoaded) {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      top: 100
    }}><Spinner animation="grow" variant="warning" /></div>
  } else {
    return  (
      <div style={{ paddingTop: 60, backgroundColor: !colorMode ? '#FFFFFF' : '#242424' }}>
        <Filters />
        <Cards cardItems={cardItems} />
        <Charts />
      </div>
    );
  }
}

export default App;
