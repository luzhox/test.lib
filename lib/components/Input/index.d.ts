/// <reference types="react" />
interface Iinput {
    bigClass?: string;
    onChange?: Function;
    HandleClick?: Function;
    onBlur?: Function;
    disabled?: boolean;
    className?: string;
    label: string;
    value: string;
    id: any;
    name: string;
    type?: string;
    typeInput?: string;
    maxLength?: number;
    hasError?: string;
    hasSpan?: string;
    sufixHolder?: string;
    sufixSolid?: boolean;
    onLoading?: boolean;
    textLoading?: boolean;
    onlyLetters?: boolean;
    enablePasswordIcon?: boolean;
    required?: boolean;
    placeholder?: string;
}
declare const Input: ({ bigClass, disabled, className, label, value, name, type, typeInput, id, sufixSolid, sufixHolder, onLoading, textLoading, onlyLetters, enablePasswordIcon, required, placeholder, hasError, hasSpan, maxLength, HandleClick, onChange, onBlur, }: Iinput) => JSX.Element;
export default Input;
