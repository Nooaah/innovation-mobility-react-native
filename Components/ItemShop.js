import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';




class ItemShop extends React.Component {

    constructor(props) {
        super(props);
    }

    viewDetailShop(shop) {
        const nav = this.props.nav
        nav.navigation.navigate('DetailShop', { shop : JSON.stringify(shop)})
    }

    render() {
        const shop = this.props.shop
        return (
            <TouchableOpacity onPress={ () => this.viewDetailShop(shop) } style={{ marginBottom : 20 }}>
                <Card>
                    <CardItem>
                    <Left>
                        <Thumbnail source={{uri: shop.image}} />
                        <Body>
                        <Text
                        style={{ fontSize : 18 }}>
                        { shop.title }</Text>
                        <Text style={{ color : 'red' }} note>{ shop.subtitle }</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody>
                    <Image source={{uri: shop.image}} 
                    style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <View style={{ flexDirection : 'row' }}>
                        <View style={{ flex : 4, marginTop : 10, marginBottom : 10 }}>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text
                                style={{ flex : 1 }}
                                numberOfLines={2}>
                                { shop.description }
                            </Text>
                            </Button>
                        </View>
                        <View style={{ flex : 1, color : 'green', alignItems : 'center', justifyContent : 'center' }}>
                            <Text>Reste { shop.enddate }H !</Text>
                        </View>
                    </View>
                </Card>

            </TouchableOpacity>
        )
    }
}

export default ItemShop