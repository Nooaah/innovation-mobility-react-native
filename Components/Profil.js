import React from 'react'
import { View, Text, Image } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FooterMenu from '../Components/FooterMenu'


class Profil extends React.Component {
    render() {
        var user = this.props.navigation.state.params.user
        user = JSON.parse(user);
        //(user)
        //Faire l'appel API pour récupérer dans la base ici
        return (
            <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center' }}>
                <View style={{ flex : 1, marginTop : 30 }}>
                    <Text style={{ textAlign : 'center', fontSize : 17 }}>Bienvenue {user.firstname}</Text>
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
                    { user.points }
                    </Animatable.Text>

                </View>

                <FooterMenu nav={this.props}/>


            </View>
        )
    }
}

export default Profil 