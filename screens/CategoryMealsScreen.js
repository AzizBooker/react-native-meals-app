import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'
import Colors from '../utils/Colors'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { FlatList } from 'react-native-gesture-handler'


const CategoryMealsScreen=props=>{
   const catId= props.navigation.getParam('categoryId')
   const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)

   const displayedMeals= MEALS.filter(meal=> meal.categoryIds.indexOf(catId) >=0)
   console.log(displayedMeals)
return(
<View style={styles.screen}>
    <FlatList data={displayedMeals}  renderItem={}/>
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


export default CategoryMealsScreen