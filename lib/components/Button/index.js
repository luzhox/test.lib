"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_js_1 = require("./style/index.js");
const Button = ({ text = '', color = '' }) => {
    return react_1.default.createElement(index_js_1.ButtonUi, { className: `button ${color}` }, text);
};
exports.default = Button;
