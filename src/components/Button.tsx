import React from 'react'
interface Props{
    children: string;
    color?: 'primary' | 'secondary' | 'success';
    onClick : () => void;
}
const Button = ({children, color, onClick}: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-"+color } onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
