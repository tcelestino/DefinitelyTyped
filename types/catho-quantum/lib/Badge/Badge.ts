/// <reference types="../../../react" />

export type BadgeSkin = 'primary' | 'secondary' | 'success' | 'error' | 'neutral';

type BadgeTheme = {
    baseFontSize?: number;
    spacing?: object;
    components?: {
        badge?: object;
    };
};

export type BadgeProps = {
    skin?: BadgeSkin;
    children?: React.ReactNodeArray | React.ReactNode;
    number?: number;
    inverted?: boolean;
    theme?: BadgeTheme;
} & { [x: string]: any };

declare const Badge: React.FunctionComponent<BadgeProps>;

export default Badge;
