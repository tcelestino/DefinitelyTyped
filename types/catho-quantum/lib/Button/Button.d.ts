/// <reference types="../../../react" />

type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type ButtonSkin = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
type ButtonType = 'button' | 'reset' | 'submit';
type ButtonTheme = {
    baseFontSize?: number;
    colors?: object;
    spacing?: object;
    breakpoints?: object;
    components?: {
        button: object;
    };
};

export type ButtonProps = {
    center?: boolean;
    disabled?: boolean;
    stroked?: boolean;
    full?: boolean;
    icon?: string;
    size?: ButtonSize;
    skin?: ButtonSkin;
    type?: ButtonType;
    className?: string;
    theme?: ButtonTheme;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & { [x: string]: any };

declare const Button: React.FunctionComponent<ButtonProps>;

export default Button;
