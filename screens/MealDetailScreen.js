import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

const MealsDetailScreen=props=>{
return(
<View style={styles.screen}>
    <Text>The Meal Details Screen!</Text>
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


export default MealsDetailScreen;
