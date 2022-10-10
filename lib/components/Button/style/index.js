"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonUi = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ButtonUi = styled_components_1.default.button `
  appearance:none ;
  -webkit-appearance:none;
  border:0px;
  outline:0px;
  border-color:${({ bgColor, variant }) => variant === 'outlined' ? bgColor : 'none'} ;
  background-color: ${({ variant }) => variant === 'outlined' ? 'none' : ({ bgColor }) => bgColor ? bgColor : 'white'};
  padding: ${({ padding }) => padding ? padding : '0px'};
  color: ${({ colorText }) => colorText ? colorText : 'black'};
  font-family: ${({ font }) => font ? font : 'sans-serif'};
  transition: ease-in-out all 0.3s;

  &:hover {
    background-color: ${({ bgColorHover }) => bgColorHover ? bgColorHover : 'white'};
    color: ${({ colorHover }) => colorHover ? colorHover : 'black'};
  }
`;
