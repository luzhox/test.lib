import styled from 'styled-components'

export const ButtonUi = styled.div`
  background-color: ${props.bgColor || 'white'};
  padding: ${props.padding || '0px'};
  color: ${props.colorText || 'black'};
  font-family: ${props.font || 'sans-serif'};
  transition: ease-in-out all 0.3s;
  &:hover {
    background-color: ${bgColorHover || 'white'};
    color: ${props.colorHover || 'black'};
  }
`
