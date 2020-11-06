import React from 'react'
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Tables from './components/Tables/Tables';
import Table from './components/Table/Table';

function App() {
  return (
    <div>
      <Filters />
      <Cards />
      <Charts />
      <Tables />
      <Table />
    </div>
  );
}

export default App;
