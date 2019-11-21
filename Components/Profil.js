import React from 'react'
import { View, Text, Image, AsyncStorage } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FooterMenu from '../Components/FooterMenu'


class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points : 0,
            resultPoints : 0
        }
    }

    refreshPoints(user) {
        if (this.state.resultPoints == 0) {
            fetch('http://ec2-3-17-12-13.us-east-2.compute.amazonaws.com/api-wimo/getUserById', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                  id : user.id
                })
            })
            .then((response) => response.json())
            .then((res) => {
                console.log("fait", res)
                this.setState({ points : res.user[0].points, resultPoints : 1 });
            })
        }
    }

    
    render() {
        var user = this.props.navigation.state.params.user
        user = JSON.parse(user);
        {  this.refreshPoints(user)  }
        console.log( this.state.points );
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
                    { this.state.points }
                    </Animatable.Text>

                </View>

                <FooterMenu nav={this.props}/>


            </View>
        )
    }
}

export default Profil 