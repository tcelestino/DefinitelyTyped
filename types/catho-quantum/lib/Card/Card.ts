import * as React from 'react';
import { StyledComponent, StyledComponentInnerComponent } from 'styled-components';

export type CardProps = {
    theme?: { colors?: object };
} & { [x: string]: any };

export type HeaderProps = {
    theme: { spacing?: object };
} & { [x: string]: any };

interface CardInterface {
    small?: boolean;
    theme?: object;
}

interface CardTitle extends CardInterface {
    theme?: {
        baseFontSize?: number;
    };
}

interface CardDescription extends CardInterface {
    theme?: {
        baseFontSize?: number;
        spacing?: object;
    };
}

interface CardThumbnail extends CardInterface {
    src: string;
    alt: string;
    rounded?: boolean;
    theme?: {
        colors?: object;
    };
}

interface CardMedia extends CardThumbnail {
    className?: string;
    style?: { [x: string]: any };
    theme?: {
        colors?: object;
        spacing?: object;
    };
}

interface CardFooter extends CardInterface {
    theme?: {
        spacing?: object;
    };
}

type Title<O extends CardTitle> = StyledComponent<'h2', any, O>;
type Description<O extends CardDescription> = StyledComponent<'div', any, O>;
type Thumbnail<O extends CardThumbnail> = StyledComponent<'img', any, O>;
type Media<O extends CardMedia> = StyledComponent<'div', any, O>;

export type TitleProps = CardTitle;
export type DescriptionProps = CardDescription;
export type ThumbnailProps = CardThumbnail;
export type MediaProps = CardMedia & { [x: string]: any };
export type ContentProps = CardDescription;
export type FooterProps = CardFooter;

declare class Card extends React.Component<CardProps> {
    static Header: StyledComponent<'header', any, HeaderProps>;
    static HeaderText: StyledComponent<'div', any, {}>;
    static Title: Title<TitleProps>;
    static Description: Description<DescriptionProps>;
    static Thumbnail: Thumbnail<ThumbnailProps>;
    static Media: Media<MediaProps>;
    static Content: StyledComponent<'div', any, ContentProps>;
    static Footer: StyledComponent<'footer', any, FooterProps>;
}

export default Card;
