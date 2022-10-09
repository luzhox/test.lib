import React from 'react'
interface IButtonProps {
  text?: string
}
const Button = ({ text = '' }: IButtonProps) => {
  return <div className='button'>{text}</div>
}

export default Button
