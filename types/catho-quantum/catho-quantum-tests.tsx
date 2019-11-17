import * as React from 'react';
import { Alert, Button, Icon } from 'catho-quantum';

const baseTheme = {
    baseFontSize: 16,
    colors: {},
    spacing: {},
    breakpoints: {},
};

const alertTheme = {
    ...baseTheme,
    components: {
        alert: {},
        button: {},
    },
};

const buttonTheme = {
    ...baseTheme,
    components: {
        button: {},
    },
};

const alert = (
    <>
        <Alert onClose={function a() {}}>Default Alert</Alert>
        <Alert onClose={function a() {}} skin="error">
            Error Alert
        </Alert>
        <Alert onClose={function a() {}} skin="neutral">
            Neutral Alert
        </Alert>
        <Alert onClose={function a() {}} skin="primary">
            Primary Alert
        </Alert>
        <Alert onClose={function a() {}} skin="warning">
            Warning Alert
        </Alert>
        <Alert onClose={function a() {}} skin="success">
            Success Alert
        </Alert>

        <Alert onClose={function a() {}} icon="icon-name">
            Alert with icon
        </Alert>

        <Alert onClose={function a() {}} theme={alertTheme}>
            Themed Alert
        </Alert>
    </>
);

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

        <Button theme={buttonTheme}>Themed Button</Button>
    </>
);

const icons = (
    <>
        <Icon name="icon-name" />
        <Icon name="icon-name" skin="color" />
    </>
);
