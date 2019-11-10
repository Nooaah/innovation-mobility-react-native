import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Tab, Tabs, ScrollableTab, H2 } from 'native-base';


class DetailShop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var shop = this.props.navigation.state.params.shop
        shop = JSON.parse(shop)
        return(
            <Tabs renderTabBar={()=> <ScrollableTab/>}>
              <Tab heading="Informations">

                    <View style={{ flex : 1 }}>
                    <Image
                        style={{ height : 169, backgroundColor : 'grey', marginBottom : 19 }}
                        source={{ uri: shop.image }}
                    />
                    <View style={{ marginLeft : 20, marginRight : 20 }}>
                        <H2>{ shop.title }</H2>
                        <Text style={{ color : 'red' }}>{ shop.subtitle }</Text>
                        <Text style={{ marginTop : 19, fontSize : 18 }}>{ shop.description }</Text>
                    </View>
                </View>

              </Tab>
              <Tab heading="Tab2">

              </Tab>
              <Tab heading="Tab3">

              </Tab>
              <Tab heading="Tab4">

              </Tab>
              <Tab heading="Tab5">

              </Tab>
            </Tabs>
        

        )
    }
}


export default DetailShop