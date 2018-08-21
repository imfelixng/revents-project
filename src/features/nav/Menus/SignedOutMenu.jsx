import React, { Component } from 'react';
import {Menu, Button} from 'semantic-ui-react';

class SignedOutMenu extends Component {
    render() {
        const {signIn} = this.props;
        return (
            <Menu.Item position="right">
                <Button onClick={() => signIn()} basic inverted content="Login" />
                <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
            </Menu.Item>
        );
    }
}

export default SignedOutMenu;