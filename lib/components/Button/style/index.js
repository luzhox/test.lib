"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonUi = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ButtonUi = styled_components_1.default.button `
  background-color: ${props => props.bgColor ? props.bgColor : 'white'};
  padding: ${props => props.padding ? props.padding : '0px'};
  color: ${props => props.colorText ? props.colorText : 'black'};
  font-family: ${props => props.font ? props.font : 'sans-serif'};
  transition: ease-in-out all 0.3s;
  &:hover {
    background-color: ${props => props.bgColorHover ? props.bgColorHover : 'white'};
    color: ${props => props.colorHover ? props.colorHover : 'black'};
  }
`;
