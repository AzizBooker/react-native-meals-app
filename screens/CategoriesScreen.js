import React from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";
import { CATEGORIES } from "../data/dummy-data";



const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={()=>{
                props.navigation.navigate('CategoryMeals',{categoryId:itemData.item.id})
            }} >
          <View >
            <Text>{itemData.item.title}</Text>
          </View>
          </TouchableOpacity>
        );
      };
  return (
    <FlatList style={styles.list} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accent,
  },
  list:{
      backgroundColor:Colors.background
  },
  gridItem: {
    backgroundColor:Colors.accent,
    borderRadius:10,
    flex: 1,
    margin: 15,
    height: 150,
  },
 
});

export default CategoriesScreen;
