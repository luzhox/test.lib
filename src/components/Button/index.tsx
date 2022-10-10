import React from 'react'
import { ButtonUi } from './style/'
interface IButtonProps {
  text: string
  bgColorHover?: string
  colorText?: string
  colorHover?: string
  font?: string
  padding?: string
  bgColor?: string
  HandleClick?: Function
  classCustom?: string
  variant?: string
}
const Button = ({
  text,
  padding = '10px 20px',
  bgColor = 'blue',
  bgColorHover = 'red',
  colorText = 'red',
  colorHover = 'green',
  font = 'sans-serif',
  classCustom = '',
  variant = '',
  HandleClick = () => {},
}: IButtonProps) => {
  return (
    <ButtonUi
      variant={variant}
      className={classCustom}
      bgColorHover={bgColorHover}
      colorText={colorText}
      colorHover={colorHover}
      font={font}
      padding={padding}
      bgColor={bgColor}
      onClick={() => HandleClick()}
    >
      {text}
    </ButtonUi>
  )
}

export default Button
