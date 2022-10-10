"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Title = ({ text = '', customClass = '' }) => {
    return (react_1.default.createElement("div", { className: `title ${customClass}` },
        react_1.default.createElement("h2", null, text)));
};
