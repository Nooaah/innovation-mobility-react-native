import React from 'react'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { AsyncStorage } from 'react-native'

class FooterMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    _retrieveData = async (to) => {
        try {
          const value = await AsyncStorage.getItem('user');
          if (value !== null) {
            //console.log(value);

            const nav = this.props.nav
            const user = value

            nav.navigation.replace(to, { 'user' : user })

          }
        } catch (error) {
          console.log(error);
        }
      };


    render() {
    const nav = this.props.nav

        return(
        <Footer>
            <FooterTab style={{backgroundColor:"#00a8ff" }}>
                <Button 
                active={ nav.navigation.state.routeName == 'Profil' ? true : false }
                onPress={ () => this._retrieveData('Profil') }>
                    <Icon style={{ color : 'white' }} name="person" />
                </Button>
                <Button
                active={ nav.navigation.state.routeName == 'Shop' ? true : false }
                onPress={ () => this._retrieveData('Shop') }>
                    <Icon style={{ color : 'white' }} name="home" />
                </Button>
                <Button>
                    <Icon style={{ color : 'white' }} name="navigate" />
                </Button>
                <Button
                active={ nav.navigation.state.routeName == 'Parametres' ? true : false }
                onPress={ () => this._retrieveData('Parametres')} >
                    <Icon style={{ color : 'white' }} name="heart" />
                </Button>
            </FooterTab>
        </Footer>
        )
    }
}

export default FooterMenu