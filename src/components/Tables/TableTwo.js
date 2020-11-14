import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableOne = () => {
    const [ rowData ] = useState([
        { make: "Toyota", model: "Celica", price: 35000, make1: "Toyota", model1: "Celica", price1: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000, make1: "Ford", model1: "Mondeo", price1: 32000  },
        { make: "Porsche", model: "Boxter", price: 72000,  make1: "Porsche", model1: "Boxter", price1: 72000, }
    ]);

    return (
        <div className="ag-theme-alpine" style={ { height: 400 } }>
            <AgGridReact rowData={rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
                <AgGridColumn field="make1"></AgGridColumn>
                <AgGridColumn field="model1"></AgGridColumn>
                <AgGridColumn field="price1"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default TableOne;