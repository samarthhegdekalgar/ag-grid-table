import React, { FC } from 'react'
import Button from '../../components/Button/Button'
interface HeaderProps {
    onDeleteSelectedRow?: () => unknown 
    onNonDeleteSelectedRow?:() => unknown
}

export const Header: FC<HeaderProps> = ({onDeleteSelectedRow = () => null, onNonDeleteSelectedRow = () => null}: HeaderProps) => {
    return(
        <div className="">
            <Button onClick={() => null}>Add Row</Button>
            <Button onClick={onDeleteSelectedRow}>Delete Selected Row</Button>
            <Button onClick={onNonDeleteSelectedRow}>Delete Non Selected Row</Button>
            <Button onClick={() => null}>Submit</Button>
        </div>
    )
}