import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./HomeScreen";
import {FullPostScreen} from "./FullPostScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={'HomeScreen'} component={HomeScreen} options={{title: 'News'}} />
              <Stack.Screen name={'FullPostScreen'} component={FullPostScreen} options={{title: 'Article'}} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
