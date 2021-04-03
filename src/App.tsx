import './App.css';
import React, { useState } from 'react';
import { Header } from './containers/Header/Header';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table, { TableData } from './components/Table/Table';

function App() {
  const [selectedRow, setSelectedRow] = useState<TableData[]>([])
  const [tableData, setTableData] = useState<TableData[]>([
        { id: 1, name: "Janie", email: "janie@gmail.com", gender: "female", dob: '3-3-2004', country: 'India', city: 'Bangalore', },
        { id: 2, name: "Janie", email: "janie@gmail.com", gender: "female", dob: '3-3-2004', country: 'India', city: 'Bangalore', },
        { id: 3, name: "Janie", email: "janie@gmail.com", gender: "female", dob: '3-3-2004', country: 'India', city: 'Bangalore', },
        { id: 4, name: "Janie", email: "janie@gmail.com", gender: "female", dob: '3-3-2004', country: 'India', city: 'Bangalore', },
    ])
  
  const handleSelectedRowDelete = () => {
    const filteredData = tableData.filter(each => !selectedRow.includes(each))
    setTableData(filteredData)
  }

  const handleNonSelectedRowDelete = () => {
    const filteredData = tableData.filter(each => selectedRow.includes(each))
    setTableData(filteredData)
  }

  return (
    <div>
      <Header onDeleteSelectedRow={handleSelectedRowDelete} onNonDeleteSelectedRow={handleNonSelectedRowDelete}/>
      <Table data={tableData} onSelectRow={(data) => setSelectedRow(data)}/>
    </div>
  );
}

export default App;
