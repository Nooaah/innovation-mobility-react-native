import React from 'react'
import { View, Text, Image } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FooterMenu from '../Components/FooterMenu'


class Shop extends React.Component {

    
    render() {
        {/* alignItems : mettre au centre en horizontal -- justifyContent : mettre au centre en vertical */}
        var user = this.props.navigation.state.params.user
        user = JSON.parse(user);
        //console.log(user)
        //Faire l'appel API pour récupérer dans la base ici
        const points = 15
        return (
            <View style={{ flex : 1 }}>

                <View style={{ flex : 1 }}>
                    <Animatable.Text 
                    style={{ textAlign : 'center', marginTop : 20 }}
                    animation="bounceIn"
                    >
                    Voici les réductions du moment { user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1) } !
                    </Animatable.Text>
                </View>

                { /* Mettre ici ma liste d'items TODO : Rajouter à l'API node les reductions */ }

                <FooterMenu nav={this.props}/>
            </View>
        )
    }
}

export default Shop 