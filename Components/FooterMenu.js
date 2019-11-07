import React from 'react'
import { Footer, FooterTab, Button, Icon } from 'native-base';

class FooterMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    click(to) {
        const nav = this.props.nav
        nav.navigation.navigate(to)
    }

    render() {
        return(
        <Footer>
            <FooterTab style={{backgroundColor:"#00a8ff"}}>
                <Button onPress={ () => this.click('Profil') }>
                    <Icon style={{ color : 'white' }} name="home" />
                </Button>
                <Button>
                    <Icon style={{ color : 'white' }} name="camera" />
                </Button>
                <Button>
                    <Icon style={{ color : 'white' }} name="navigate" />
                </Button>
                <Button onPress={ () => this.click('Login')} >
                    <Icon style={{ color : 'white' }} name="person" />
                </Button>
            </FooterTab>
        </Footer>
        )
    }
}

export default FooterMenu