import React, { FC } from 'react'

interface ButtonProps {
    children: string
    onClick: () => unknown
}
const Button: FC<ButtonProps> =({children, onClick = () => null}: ButtonProps) => {
    return <button type="button" className="" onClick={onClick}>{children}</button>
}
export default Button