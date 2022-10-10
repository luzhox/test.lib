"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
/**
 * Input React Component
 * Examples:
   <Input disabled={false} label="Input" value={text} onChange={value => setText(value)} />
 *
 *
 */
function generateRandomLetter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 2; i++) {
        result =
            result + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const uuid = () => {
    const num = Math.floor(Math.random() * 1000000 + 1);
    const lettersA = generateRandomLetter();
    const lettersB = generateRandomLetter();
    return `${lettersA}${num}${lettersB}`;
};
const Input = ({ bigClass = '', disabled = false, className = '', label = '', value = '', name = '', type = 'text', typeInput = 'text', id = uuid(), sufixSolid = false, sufixHolder = '', onLoading = false, textLoading = false, onlyLetters = false, enablePasswordIcon = false, required = false, placeholder = '', hasError = '', hasSpan = '', maxLength = 99, HandleClick = () => { }, onChange = () => { }, onBlur = () => { }, }) => {
    const refInput = (0, react_1.useRef)(null);
    const [active, setActive] = (0, react_1.useState)('');
    const [val, setVal] = (0, react_1.useState)(value || '');
    const [toggleInput, setToggleInput] = (0, react_1.useState)(typeInput || type);
    const regexByTypeInput = {
        number: /[^0-9]/g,
        text: /[^a-zA-ZÁÉÍÓÚáéíóúñÑ ]/gi,
        decimal: /[^\d+(.\d{1,2})?]/g,
        alfa: /[^a-z0-9 -]/gi,
        // email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/,
    };
    (0, react_1.useEffect)(() => {
        if (val !== value) {
            setVal(value);
        }
    }, [val, value]);
    const hasPoint = (str) => str.includes('.');
    const limitDecimal = (number, decimal = 2) => {
        if (!hasPoint(number)) {
            return number;
        }
        const numberAbs = number.split('.')[0];
        const numberDecimal = number.split('.')[1];
        const limit = numberDecimal.slice(0, decimal);
        return `${numberAbs}.${limit}`;
    };
    const onChangeValue = (event) => {
        if (!disabled && onChange) {
            let text = event.target.value;
            if (type == 'number') {
                text = text.replace(regexByTypeInput.number, '');
            }
            else if (onlyLetters) {
                text = text.replace(regexByTypeInput.text, '');
            }
            if (type === 'decimal') {
                text = limitDecimal(text);
            }
            onChange(text);
            setVal(text);
        }
    };
    const handleBlur = (event) => {
        if (onBlur) {
            onBlur(event.target.value);
        }
    };
    const mouseDownEvt = (event) => {
        if (!refInput || (refInput && refInput.current)) {
            return;
        }
        setActive('');
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener('mousedown', mouseDownEvt);
        return () => document.removeEventListener('mousedown', mouseDownEvt);
    }, []);
    const setDefaultPropsInput = (toggle) => {
        const defaultPropsInput = { type: 'text' };
        if (typeInput === 'password') {
            defaultPropsInput.type = 'password';
        }
        if (type === 'decimal') {
            defaultPropsInput.type = 'number';
            // defaultPropsInput.step = '0.00'
            // defaultPropsInput.inputMode = 'decimal'
        }
        if (toggle) {
            if (toggleInput === 'text') {
                defaultPropsInput.type = 'password';
                setToggleInput('password');
                return defaultPropsInput;
            }
            defaultPropsInput.type = 'text';
            setToggleInput('text');
        }
        return defaultPropsInput;
    };
    const handlerEye = () => {
        setDefaultPropsInput('toggle');
    };
    return (react_1.default.createElement("div", { className: `cuidaUi ${bigClass}` },
        react_1.default.createElement("div", { id: id, ref: refInput, className: `cuidaUi__input  ${active} ${disabled ? 'disabled' : ''}
        ${(val || '').trim().length > 0 ? 'filled' : ''}
        ${hasError ? 'has-error' : ''}
        ${hasSpan ? 'has-span' : ''}
        ${sufixSolid ? 'sufix--solid' : ''}
        ${className}`.trim(), onClick: () => setActive('active') }, onLoading ? (react_1.default.createElement("div", { className: 'rd--input-loader' },
            react_1.default.createElement("div", { className: 'loadercontent loader' },
                react_1.default.createElement("div", { className: 'loader-style-1' })),
            react_1.default.createElement("p", null, textLoading))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("label", null,
                label,
                required && '*'),
            enablePasswordIcon && (react_1.default.createElement("i", { className: `eye-icon  ${toggleInput === 'text' ? 'icon-eye-normal' : 'icon-eye-pirata'}`, onClick: () => handlerEye() })),
            react_1.default.createElement("input", Object.assign({ name: name, maxLength: maxLength ? maxLength : 99, value: val || '', onChange: onChangeValue, onBlur: handleBlur, onClick: () => HandleClick, disabled: disabled }, setDefaultPropsInput(), { placeholder: placeholder, type: toggleInput })),
            sufixHolder && sufixHolder.length && (react_1.default.createElement("span", { className: 'cuidaUi__sufix' }, sufixHolder)))))));
};
exports.default = Input;
