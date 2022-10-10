"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonUi = void 0;
const style_components_1 = __importDefault(require("style-components"));
/* tslint:disable */
exports.ButtonUi = style_components_1.default.button `
  background-color: ${props.bgColor || 'white'};
  padding: ${props.padding || '0px'};
  color: ${props.color || 'black'};
  font-family: ${props.font || 'sans-serif'};
  transition: ease-in-out all 0.3s;
  &:hover {
    background-color: ${bgColorHover || 'white'};
    color: ${props.colorHover || 'black'};
  }
`;
