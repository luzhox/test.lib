import React from 'react'
interface ITitleProps {
  text?: string
  customClass?: string
}
const Title = ({ text = '', customClass = '' }: ITitleProps) => {
  return (
    <div className={`title ${customClass}`}>
      <h2>{text}</h2>
    </div>
  )
}
