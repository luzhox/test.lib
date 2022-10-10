import styled from 'style-components'

/* tslint:disable */
export const ButtonUi = styled.button`
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
