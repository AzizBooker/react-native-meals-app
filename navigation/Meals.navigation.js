import { createAppContainer, NavigationContainer } from "react-navigation";
import Colors from "../utils/Colors";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailScreen from "../screens/MealDetailScreen";
import { color } from "react-native-reanimated";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle:"Home"
      },
      
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      
    },
    MealDetail: {
      screen: MealsDetailScreen,
      navigationOptions: {},
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.background,
      
    },
  }
);

export default createAppContainer(MealsNavigator);
