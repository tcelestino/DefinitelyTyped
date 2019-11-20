/// <reference types="../../../react" />

export type CheckboxButtonSkin = 'neutral' | 'primary' | 'success' | 'warning' | 'error';

export type CheckboxButtonProps = {
    children?: Array<React.ReactNode> | React.ReactNode;
    skin?: CheckboxButtonSkin;
    icon?: string;
    checked?: boolean;
    disabled?: boolean;
    error?: string;
    id?: string;
    label?: string;
    name: string;
    value?: string;
    onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
};

declare const CheckboxButton: React.FunctionComponent<CheckboxButtonProps>;

export default CheckboxButton;
