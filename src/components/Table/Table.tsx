import React, { FC } from 'react';
import { AgGridColumn, AgGridReact, } from 'ag-grid-react';
import {  SelectionChangedEvent } from 'ag-grid-community';

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
    onSelectRow?: (arg0: TableData[]) => unknown
    showCheckBox?: boolean
}

const Table: FC<TableProps> = ({data, onSelectRow = () => null, showCheckBox = false}: TableProps) => {

    const onSelectionChange = (event: SelectionChangedEvent) => {
        onSelectRow(event.api.getSelectedRows())
    }


    return(
         <div className="ag-theme-alpine" style={{ height: '50vh', width: '100%' }}>
            <AgGridReact
                rowData={data} 
                rowSelection="multiple" 
                rowMultiSelectWithClick
                onSelectionChanged={onSelectionChange}
            >
                <AgGridColumn field="id" checkboxSelection={showCheckBox}></AgGridColumn>
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