import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Components/Login.js'

const StackNavigator = createStackNavigator({
    Login : {
        screen : Login,
        navigationOptions : {
            title : "Connexion"
        }
    }
})

export default createAppContainer(StackNavigator)