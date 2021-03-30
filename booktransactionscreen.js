import React from 'react'
import {Text,View} from 'react-native'

export default class TranscactionScreen extends React.Component{
    render(){
        return(
            <View style = {{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>
                    Issue or Return
                </Text>
            </View>
        )
    }
}