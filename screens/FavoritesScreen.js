import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

const FavoritesScreen =props=>{
return(
<View style={styles.screen}>
    <Text>The Favorites Screen!</Text>
</View>
)
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.background
    }
})

export default FavoritesScreen;