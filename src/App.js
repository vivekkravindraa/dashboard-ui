import React from 'react'
import { useSelector } from 'react-redux';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';

function App() {
  const colorMode = useSelector(state => state.toggle.colorMode);

  return (
    <div style={{ paddingTop: 60, backgroundColor: !colorMode ? '#FFFFFF' : '#242424' }}>
      <Filters />
      <Cards />
      <Charts />
    </div>
  );
}

export default App;
