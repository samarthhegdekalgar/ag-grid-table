import './App.css';
import React, { useState } from 'react';
import { Header } from './containers/Header/Header';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table, { TableData } from './components/Table/Table';
import { data } from './constants/data';
import { SUBMITTED_DATA } from './constants/localStorageKeys';

function App() {
  const [selectedRow, setSelectedRow] = useState<TableData[]>([])
  const storedData = localStorage.getItem(SUBMITTED_DATA)

  const [submittedData, setSubmittedData] = useState<TableData[]>(JSON.parse(storedData as string) ?? data)
  const [tableData, setTableData] = useState<TableData[]>(data)
  
  const handleSelectedRowDelete = () => {
    const filteredData = tableData.filter(each => !selectedRow.includes(each))
    setTableData(filteredData)
  }

  const handleNonSelectedRowDelete = () => {
    const filteredData = tableData.filter(each => selectedRow.includes(each))
    setTableData(filteredData)
  }

  const handleSubmit = () => {
    setSubmittedData(selectedRow)
    localStorage.setItem(SUBMITTED_DATA, JSON.stringify(selectedRow))
  }

  return (
    <div>
      <Header 
        onDeleteSelectedRow={handleSelectedRowDelete} 
        onNonDeleteSelectedRow={handleNonSelectedRowDelete}
        onSubmit={handleSubmit}
      />
      <Table data={tableData} onSelectRow={(data) => setSelectedRow(data)} showCheckBox/>
      <span>Submitted Data</span>
      <Table data={submittedData}/>
    </div>
  );
}

export default App;
