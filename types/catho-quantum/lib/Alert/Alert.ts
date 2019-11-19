/// <reference types="../../../react" />

export type AlertSkin = 'primary' | 'success' | 'error' | 'neutral' | 'warning';

type AlertTheme = {
    baseFontSize?: number;
    colors?: object;
    spacing?: object;
    components?: {
        alert?: object;
        button?: object;
    };
};

export type AlertProps = {
    children: React.ReactNode;
    icon?: string;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    skin?: AlertSkin;
    theme?: AlertTheme;
} & { [x: string]: any };

declare const Alert: React.FunctionComponent<AlertProps>;

export default Alert;
