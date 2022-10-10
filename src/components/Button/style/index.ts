import styled from 'styled-components'

export const ButtonUi = styled.button<{bgColor: string,padding:string,colorHover:string,bgColorHover:string,colorText:string,font:string}>`
  appearance:none ;
  -webkit-appearance:none;
  border:0px;
  outline:0px;
  background-color: ${props => props.bgColor?props.bgColor : 'white'};
  padding: ${props => props.padding?props.padding : '0px'};
  color: ${props =>props.colorText?props.colorText : 'black'};
  font-family: ${props =>props.font?props.font : 'sans-serif'};
  transition: ease-in-out all 0.3s;

  &:hover {
    background-color: ${props =>props.bgColorHover?props.bgColorHover : 'white'};
    color: ${props =>props.colorHover?props.colorHover : 'black'};
  }
`
