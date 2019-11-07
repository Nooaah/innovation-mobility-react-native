import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'native-base'

class Login extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.textInput } placeholder={"Identifiants"}/>
                <TextInput style={ styles.textInput } placeholder={"Mot de passe"}/>
                <Button primary style={ styles.buttonConnect }><Text style={ styles.textButton }> Se connecter </Text></Button>

            </View>
        )
    }
}

const styles = StyleSheet.create({
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