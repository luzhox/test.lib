"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_1 = require("./style/");
const Button = ({ text, padding = '10px 20px', bgColor = 'blue', bgColorHover = 'red', colorText = 'red', colorHover = 'green', font = 'sans-serif', }) => {
    return (react_1.default.createElement(style_1.ButtonUi, { bgColorHover: bgColorHover, colorText: colorText, colorHover: colorHover, font: font, padding: padding, bgColor: bgColor }, text));
};
exports.default = Button;
