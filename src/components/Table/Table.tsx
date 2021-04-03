import React, { FC, useState } from 'react';
import { AgGridColumn, AgGridReact, } from 'ag-grid-react';
import { RowSelectedEvent } from 'ag-grid-community';

export interface TableData {
    id: number
    name: string
    email: string
    gender: 'male' | 'female'
    dob: string
    country: string
    city: string
}

interface TableProps {
    data: TableData[]
    onSelectRow: (arg0: TableData[]) => unknown
}

const Table: FC<TableProps> = ({data, onSelectRow}: TableProps) => {
    const [selectedRow, setSelectedRow] = useState<TableData[]>([])

    const handleGridChange =(event: RowSelectedEvent) => {
        setSelectedRow([...selectedRow, event.data])
        onSelectRow([...selectedRow, event.data])
    }

    return(
         <div className="ag-theme-alpine" style={{ height: '50vh', width: '100%' }}>
            <AgGridReact
                rowData={data} rowSelection="multiple" onRowSelected={handleGridChange}>
                <AgGridColumn field="id" checkboxSelection={ true }></AgGridColumn>
                <AgGridColumn field="name"></AgGridColumn>
                <AgGridColumn field="email"></AgGridColumn>
                <AgGridColumn field="gender"></AgGridColumn>
                <AgGridColumn field="dob"></AgGridColumn>
                <AgGridColumn field="country"></AgGridColumn>
                <AgGridColumn field="city"></AgGridColumn>
                <AgGridColumn field="action"></AgGridColumn>
            </AgGridReact>
        </div>
    )
}
export default Table