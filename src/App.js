import React from 'react'
import { useSelector } from 'react-redux';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Tables from './components/Tables/Tables';
import Table from './components/Table/Table';

function App() {
  const colorMode = useSelector(state => state.colorMode);

  return (
    <div style={{ paddingTop: 60, backgroundColor: !colorMode ? '#FFFFFF' : '#242424' }}>
      <Filters />
      <Cards />
      <Charts />
      <Tables />
      <Table />
    </div>
  );
}

export default App;
