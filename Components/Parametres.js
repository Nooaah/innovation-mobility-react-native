import React from 'react'
import { View, Text, Image } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FooterMenu from '../Components/FooterMenu'


class Parametres extends React.Component {

    
    render() {
        var user = this.props.navigation.state.params.user
        user = JSON.parse(user);
        //console.log(user)
        //Faire l'appel API pour récupérer dans la base ici
        const points = 15
        return (
            <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center' }}>
                <View style={{ flex : 1, marginTop : 30 }}>
                    <Text style={{ textAlign : 'center', fontSize : 17 }}>Parametres {user.firstname}</Text>
                    <Text style={{ textAlign : 'center', fontSize : 17 }}>Email : {user.mail}</Text>
                    <Animatable.Image 
                    animation="pulse"
                    iterationCount="infinite"
                    source={{ uri : 'https://www.freeiconspng.com/uploads/cloud-icon-16.png' }}
                    style={{ width : 200, height : 200 }}
                    />
                    <Animatable.Text 
                    animation="pulse"
                    iterationCount="infinite"
                    style={{ textAlign : 'center', fontSize : 40, marginTop : -120, color : '#00a8ff', fontWeight : 'bold' }}>
                    { points }
                    </Animatable.Text>

                </View>

                <FooterMenu nav={this.props}/>


            </View>
        )
    }
}

export default Parametres 