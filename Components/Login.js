import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, ScrollView, AsyncStorage } from 'react-native'
import { Button } from 'native-base'
import * as Animatable from 'react-native-animatable';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }

    _connection() {
        //this._storeData('username', this.state.username)
        this._retrieveData('username')
    }

    _storeData = async (set, req) => {
        try {
          await AsyncStorage.setItem(set, req);
        } catch (error) {
          // Error saving data
        }
      };



      login = () => {
          fetch('http://ec2-3-17-12-13.us-east-2.compute.amazonaws.com/api-wimo/getUserById', {
              method : 'POST',
              headers : {
                  'Accept' : 'application/json',
                  'Content-Type' : 'application/json'
              },
              body : JSON.stringify({
                id : 1
              })
          })
          .then((response) => response.json())
          .then((res) => {
              AsyncStorage.setItem('user', JSON.stringify(res.user[0]) );
            
              this._retrieveData('user')
              
          })

      }

      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('user');
          if (value !== null) {
            //console.log(value);
            this.props.navigation.replace('Profil', { user : value })

          }
        } catch (error) {
          console.log(error);
        }
      };
      
      render() {
        {AsyncStorage.removeItem('user')}
        {/*this._retrieveData('username')*/}
        return (
            <ScrollView>
                <View style={ styles.container }>
                    <View style={{ justifyContent : 'center', alignItems : 'center', marginTop : 30 }}>
                        <Animatable.Image 
                            animation="pulse"
                            iterationCount="infinite"
                            source={{ uri : 'https://img.icons8.com/bubbles/2x/bus.png' }}
                            style={ styles.busImage }
                        />
                    </View>
                    <TextInput onChangeText={(text) => this.setState({ username : text }) } style={ styles.textInput } placeholder={"Identifiants"}/>
                    <TextInput 
                    secureTextEntry={true}
                    style={ styles.textInput } 
                    placeholder={"Mot de passe"}/>
                    <Button onPress={() => this.login()} style={[styles.buttonConnect, { backgroundColor : '#00a8ff' }]}><Text style={ styles.textButton }> Se connecter </Text></Button>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    busImage : {
        width : 200,
        height : 200
    },
    container : {
        justifyContent : 'center',
        flex : 1
    },
    textInput : {
        borderColor : 'transparent',
        borderBottomColor : 'grey',
        borderWidth: 1,
        height : 40,
        marginBottom : 20,
        marginLeft : 20,
        marginRight : 20
    },
    buttonConnect : {
        marginLeft : 20,
        marginRight : 20,
        marginTop : 10
    },
    textButton : {
        color : 'white',
        width : '100%',
        textAlign : 'center',
        fontSize : 17
    }
})

export default Login
