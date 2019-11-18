import * as React from 'react';
import { Alert, Badge, Button, Card, Icon } from 'catho-quantum';

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

const badgeTheme = {
    ...baseTheme,
    components: {
        badge: {},
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

const badge = (
    <>
        <Badge />
        <Badge>Badge with children</Badge>

        <Badge skin="primary" />
        <Badge skin="secondary" />
        <Badge skin="success" />
        <Badge skin="error" />
        <Badge skin="neutral" />

        <Badge number={1} />
        <Badge inverted />
        <Badge theme={badgeTheme} />
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

const card = (
    <>
        <Card>
            <Card.Header>
                <Card.HeaderText>
                    <Card.Title small>Title Card</Card.Title>
                    <Card.Description small></Card.Description>
                </Card.HeaderText>
                <Card.Thumbnail rounded src="#" alt="" />
            </Card.Header>
            <Card.Content>
                Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed metus elit. In hac habitasse
                platea dictumst. Fusce non purus a dui semper molestie vitae in sapien. In a odio quis nisi placerat
                varius eget et magna. Donec nec cursus mauris. Donec a cursus velit.
            </Card.Content>
            <Card.Footer>
                <Button size="small">Send</Button>
            </Card.Footer>
        </Card>

        <Card>
            <Card.Header>
                <Card.Thumbnail src="https://dummyimage.com/72x72" alt="Avatar" />
                <Card.HeaderText>
                    <Card.Title small>Title</Card.Title>
                    <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
                </Card.HeaderText>
            </Card.Header>
            <Card.Media src="https://dummyimage.com/800x800" alt="A beautiful Cat" />
            <Card.Content>
                Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed metus elit. In hac habitasse
                platea dictumst. Fusce non purus a dui semper molestie vitae in sapien. In a odio quis nisi placerat
                varius eget et magna. Donec nec cursus mauris. Donec a cursus velit.
            </Card.Content>
            <Card.Footer>
                <div>
                    <Button size="small" skin="secondary">
                        See more
                    </Button>
                </div>
                <div>
                    <Icon name="favorite" />
                    <Icon name="share" />
                </div>
            </Card.Footer>
        </Card>
    </>
);

const icons = (
    <>
        <Icon name="icon-name" />
        <Icon name="icon-name" skin="color" />
    </>
);
