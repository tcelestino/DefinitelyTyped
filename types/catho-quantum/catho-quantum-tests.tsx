/// <reference types="../react" />

import { Button } from './index';

const theme = {
    baseFontSize: 16,
    colors: {},
    spacing: {},
    breakpoints: {},
    components: {
        button: {},
    },
};
const buttons = (
    <>
        <Button>Button</Button>
        <Button onClick={function b() {}}>Regular Button</Button>
        <Button size="xlarge">Extra large Button</Button>
        <Button size="large">Large Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="small">Small Button</Button>
        <Button size="xsmall">Extra small Button</Button>

        <Button skin="error">Error Button</Button>
        <Button skin="neutral">Neutral Button</Button>
        <Button skin="primary">Primary Button</Button>
        <Button skin="secondary">Secondary Button</Button>
        <Button skin="success">Success Button</Button>
        <Button skin="warning">Warning Button</Button>

        <Button center>Center Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button stroked>Stroked Button</Button>
        <Button full>Full Button</Button>

        <Button icon="ico">Button with icon</Button>

        <Button type="submit">Button type submit</Button>
        <Button type="button">Button type button</Button>
        <Button type="reset">Button type reset</Button>

        <Button theme={theme}>Themed Button</Button>
    </>
);
