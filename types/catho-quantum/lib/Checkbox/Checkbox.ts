/// <reference types="../../../react" />

type CheckboxTheme = {
    colors?: object;
    spacing?: object;
    baseFontSize?: number;
};

export type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    children?: string;
    error?: string;
    id?: string;
    label?: string;
    name: string;
    value?: string;
    onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
    theme?: CheckboxTheme;
};

declare const Checkbox: React.FunctionComponent<CheckboxProps>;

export default Checkbox;
