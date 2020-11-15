import React, { useState } from 'react';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';
import { AllModules } from '@ag-grid-enterprise/all-modules';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { tableData } from '../../data/tableJsonData';

import '../../assets/styles/Table.scss';

const Table = () => {
  const [ rowData, setRowData ] = useState(null);

  const onGridReady = (params) => {
      setRowData(tableData);
//  const httpRequest = new XMLHttpRequest();
//  const updateData = (data) => {
//     setRowData(data);
//  };

//     httpRequest.open(
//       'GET',
//       'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
//     );
//     httpRequest.send();
//     httpRequest.onreadystatechange = () => {
//       if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//         updateData(JSON.parse(httpRequest.responseText));
//       }
//     };
  };

  return (
    <div className="tableContainer" style={{ height: '100%' }}>
      <div
        id="myGrid"
        style={{
          height: '100%',
          width: '100%',
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          modules={AllModules}
          autoGroupColumnDef={{
            headerName: 'Group',
            minWidth: 170,
            field: 'athlete',
            valueGetter: function (params) {
              if (params.node.group) {
                return params.node.key;
              } else {
                return params.data[params.colDef.field];
              }
            },
            headerCheckboxSelection: true,
            cellRenderer: 'agGroupCellRenderer',
            cellRendererParams: { checkbox: true },
          }}
          defaultColDef={{
            editable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 100,
          }}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          debug={true}
          rowSelection={'multiple'}
          rowGroupPanelShow={'always'}
          pivotPanelShow={'always'}
          enableRangeSelection={true}
          pagination={true}
          onGridReady={onGridReady}
          rowData={rowData}
        >
          <AgGridColumn
            field="athlete"
            minWidth={170}
            checkboxSelection={checkboxSelection}
            headerCheckboxSelection={headerCheckboxSelection}
          />
          <AgGridColumn field="age" />
          <AgGridColumn field="country" />
          <AgGridColumn field="year" />
          <AgGridColumn field="date" />
          <AgGridColumn field="sport" />
          <AgGridColumn field="gold" />
          <AgGridColumn field="silver" />
          <AgGridColumn field="bronze" />
          <AgGridColumn field="total" />
        </AgGridReact>
      </div>
    </div>
  );
};

var checkboxSelection = function (params) {
  return params.columnApi.getRowGroupColumns().length === 0;
};
var headerCheckboxSelection = function (params) {
  return params.columnApi.getRowGroupColumns().length === 0;
};

export default Table;