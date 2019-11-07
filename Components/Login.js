import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, ScrollView, AsyncStorage } from 'react-native'
import { Button } from 'native-base'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }

    _connection() {
        this._storeData('username', this.state.username)
        this._retrieveData('username')
    }

    _storeData = async (set, req) => {
        try {
          await AsyncStorage.setItem(set, req);
        } catch (error) {
          // Error saving data
        }
      };

      _retrieveData = async (get) => {
        try {
          const value = await AsyncStorage.getItem(get);
          if (value !== null) {
            // We have data!!
            this.props.navigation.replace("Profil", { username : value })
          }
        } catch (error) {
          // Error retrieving data
        }
      };
      
      render() {
        {this._retrieveData('username')}
        return (
            <ScrollView>
                <View style={ styles.container }>
                    <View style={{ justifyContent : 'center', alignItems : 'center', marginTop : 30 }}>
                        <Image 
                        source={{ uri : 'https://img.icons8.com/bubbles/2x/bus.png' }}
                        style={ styles.busImage }
                        />
                    </View>
                    <TextInput onChangeText={(text) => this.setState({ username : text }) } style={ styles.textInput } placeholder={"Identifiants"}/>
                    <TextInput style={ styles.textInput } placeholder={"Mot de passe"}/>
                    <Button onPress={() => this._connection()} style={[styles.buttonConnect, { backgroundColor : '#00a8ff' }]}><Text style={ styles.textButton }> Se connecter </Text></Button>

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