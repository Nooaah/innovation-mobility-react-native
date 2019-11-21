import React from 'react'
import { View, Text, Image, AsyncStorage, StyleSheet, TextInput, Alert } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FooterMenu from '../Components/FooterMenu'


class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points : 0,
            resultPoints : 0,
            code : ""
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
                this.setState({ points : res.user[0].points, resultPoints : 1 });
            })
        }
    }

    addCode() {
        if (this.state.code == "") {
            Alert.alert(
                '✋ Erreur',
                'Votre code est vide',
                [
                    {
                        text: 'Recommencer'
                    }
                ],
                {cancelable: false},
              );
        }
        else {
            Alert.alert(
                '➕ Ajouter ce code ?',
                this.state.code,
                [
                    {
                      text: 'Oui', 
                      onPress: () => console.log('Code ajouté')
                    },
                    {
                        text: 'Annuler'
                    }
                ],
                {cancelable: false},
              );
        }

    }

    
    render() {
        var user = this.props.navigation.state.params.user
        user = JSON.parse(user);
        {  this.refreshPoints(user)  }
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

                <View style={{ flex : 1 }}>
                    <TextInput 
                        onChangeText={(text) => this.setState({ code : text }) } 
                        style={ styles.textInput } 
                        placeholder={"Ajouter un code"}/>
                        <Button onPress={() => this.addCode()} info style={{ marginTop : 20 , alignContent : 'center', justifyContent : 'center' }} ><Text style={{ color : 'white' }}> Ajouter </Text></Button>
                </View>

                <FooterMenu nav={this.props}/>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput : {
        borderColor : 'transparent',
        borderBottomColor : 'grey',
        borderWidth: 1,
        height : 40,
        width : 200,
        textAlign : 'center'
    }
})

export default Profil 