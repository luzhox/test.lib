import React from 'react'
interface IButtonProps {
  text?: string
  color?: string
}
const Button = ({ text = '', color = '' }: IButtonProps) => {
  return <div className={`button ${color}`}>{text}</div>
}

export default Button
