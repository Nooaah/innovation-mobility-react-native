import React from 'react'
import { View, Text, Image } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FooterMenu from '../Components/FooterMenu'


class Shop extends React.Component {

    
    render() {
        var user = this.props.navigation.state.params.user
        user = JSON.parse(user);
        //console.log(user)
        //Faire l'appel API pour récupérer dans la base ici
        const points = 15
        return (
            <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center' }}>

                {{ /* Create card of shops here */ }}
            

                <FooterMenu nav={this.props}/>


            </View>
        )
    }
}

export default Shop 