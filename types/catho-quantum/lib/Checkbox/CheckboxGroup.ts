import * as React from 'react';

type CheckboxGroupTheme = {
    colors?: object;
    spacing?: object;
};

export type CheckboxGroupProps = {
    children?: Array<React.ReactElement> | React.ReactElement;
    icon?: string;
    error?: string;
    inline?: boolean;
    onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
    options?: Array<{
        checked?: boolean;
        disabled?: boolean;
        label?: string | React.ReactNode;
        name: string;
        value?: string;
    }>;
    type?: HTMLInputElement | HTMLButtonElement;
    theme?: CheckboxGroupTheme;
};

declare class CheckboxGroup extends React.Component<CheckboxGroupProps> {}

export default CheckboxGroup;
