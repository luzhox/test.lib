import React from 'react'
import { ButtonUi } from './style/index.js'
interface IButtonProps {
  text?: string
  color?: string
}
const Button = ({ text = '', color = '' }: IButtonProps) => {
  return <ButtonUi className={`button ${color}`}>{text}</ButtonUi>
}

export default Button
