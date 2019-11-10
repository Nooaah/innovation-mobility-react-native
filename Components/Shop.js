import React from 'react'
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import { Footer, FooterTab, Button, Icon, H3 } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FooterMenu from '../Components/FooterMenu'
import ItemShop from './ItemShop';


class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shops : [],
            isLoading : true
        }
    }


    componentDidMount(){
        fetch("http://ec2-3-17-12-13.us-east-2.compute.amazonaws.com/api-wimo/getRestaurants")
        .then(response => response.json())
        .then((res)=> {
            this.setState({
            isLoading: false,
            shops: res.restaurants
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

    _displayLoading() {
        if (this.state.isLoading === true) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>
            )
        }
    }

    
    
    render() {
        {/* alignItems : mettre au centre en horizontal -- justifyContent : mettre au centre en vertical */}
        var user = this.props.navigation.state.params.user
        user = JSON.parse(user);
        //Faire l'appel API pour récupérer dans la base ici
        const points = 15
        return (
            <View style={{ flex : 1 }}>

                    <Animatable.Text 
                    style={ styles.banniere }
                    animation="bounceIn">
                        Voici les réductions du moment { user.pseudo.charAt(0).toUpperCase() + user.pseudo.slice(1) } !
                    </Animatable.Text>


                    <FlatList style={{ marginTop : 50 }}
                    data={this.state.shops}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem={({ item }) => <ItemShop shop={item} nav={this.props}/>}
                    />

                
                <FooterMenu nav={this.props}/>
                { this._displayLoading() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loader : {
        position : 'absolute',
        left : 0,
        right : 0,
        top : 100,
        bottom : 0,
        alignItems : 'center',
        justifyContent : 'center'
    },
    banniere : {
        textAlign : 'center', 
        backgroundColor : '#2ecc7199', 
        color : 'white', 
        paddingTop : 10, 
        paddingBottom : 10,
        position : 'absolute',
        left : 0,
        right : 0,
        zIndex : 2

    }
})

export default Shop 