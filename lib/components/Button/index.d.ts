/// <reference types="react" />
interface IButtonProps {
    text: string;
    bgColorHover?: string;
    colorText?: string;
    colorHover?: string;
    font?: string;
    padding?: string;
    bgColor?: string;
    HandleClick?: Function;
    classCustom?: string;
}
declare const Button: ({ text, padding, bgColor, bgColorHover, colorText, colorHover, font, classCustom, HandleClick, }: IButtonProps) => JSX.Element;
export default Button;
