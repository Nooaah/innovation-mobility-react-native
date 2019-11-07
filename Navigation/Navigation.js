import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Components/Login.js'
import Profil from '../Components/Profil'

const StackNavigator = createStackNavigator({
    Login : {
        screen : Login,
        navigationOptions : {
            title : "Connexion",
            headerStyle: {
                backgroundColor: '#00a8ff'
            },
            headerTitleStyle : {
                color : 'white',
                fontWeight : '100'
            }
        }
    },
    Profil : {
        screen : Profil,
        navigationOptions : {
            title : "Profil",
            headerStyle: {
                backgroundColor: '#00a8ff',
                color : 'white'
            },
            headerTitleStyle : {
                color : 'white',
                fontWeight : '100'
            }
        }
    }
})


export default createAppContainer(StackNavigator)