import React from 'react'
import { ButtonUi } from './style/index.js'
interface IButtonProps {
  text?: string
  bgColorHover: string
  colorText?: string
  colorHover?: string
  font?: string
  padding?: string
  bgColor?: string
}
const Button = ({
  text = '',
  padding = '',
  bgColor = '',
  bgColorHover = '',
  colorText = '',
  colorHover = '',
  font = '',
}: IButtonProps) => {
  return (
    <ButtonUi
      bgColorHover={bgColorHover}
      colorText={colorText}
      colorHover={colorHover}
      font={font}
      padding={padding}
      bgColor={bgColor}
    >
      {text}
    </ButtonUi>
  )
}

export default Button
