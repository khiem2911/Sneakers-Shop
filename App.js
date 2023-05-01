import Mainscreen from './Screens/mainscreen'
import Detail from './Screens/detail'
import { NavigationContainer } from '@react-navigation/native';
import Favorite from './Screens/Favorite'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Cart from './Screens/cart'
import 'react-native-gesture-handler'
export default function App() {
  const Drawer=createDrawerNavigator()
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main" screenOptions={{ headerShown: false}} >
        <Drawer.Screen name="Main" component={Mainscreen} />
        <Drawer.Screen  name="Detail" component={Detail} options={{drawerItemStyle:{display:"none"},}} />
        <Drawer.Screen name="Favorite" component={Favorite} />
        <Drawer.Screen  name="Cart" component={Cart} options={{drawerItemStyle:{display:"none"},}} />
      </Drawer.Navigator>
    </NavigationContainer>
   
  );
}
