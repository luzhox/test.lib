import styled from 'styled-components'

export const ButtonUi = styled.button<{variant:string,bgColor: string,padding:string,colorHover:string,bgColorHover:string,colorText:string,font:string}>`
  appearance:none ;
  -webkit-appearance:none;
  outline:0px;
  border:${({variant}) => variant === 'outlined'? '1px solid white' : '0px'};
  border-color:${({bgColor,variant}) => variant === 'outlined'? bgColor : 'none'} ;
  background-color: ${({variant}) => variant === 'outlined' ?'transparent' : ({bgColor})=>bgColor?bgColor:'white'};
  padding: ${({padding}) => padding?padding : '0px'};
  color: ${({colorText}) =>colorText?colorText : 'black'};
  font-family: ${({font}) =>font?font : 'sans-serif'};
  transition: ease-in-out all 0.3s;

  &:hover {
    background-color: ${({bgColorHover}) =>bgColorHover?bgColorHover : 'white'};
    color: ${({colorHover}) =>colorHover?colorHover : 'black'};
  }
`
