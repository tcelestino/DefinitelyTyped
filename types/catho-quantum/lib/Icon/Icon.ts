/// <reference types="../../../react" />

export type IconProps = {
    name: string;
    style?: object;
    skin?: string;
} & { [x: string]: any };

declare const Icon: React.FunctionComponent<IconProps>;

export default Icon;
