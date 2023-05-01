import { Text, TextInput, View,TouchableOpacity,Image } from 'react-native';
import Icons from 'react-native-vector-icons/Feather'
import { styles } from '../CSS/style'
import { useNavigation } from '@react-navigation/native';

function Headers({item}){
  const navigate=useNavigation()
  
    return (
        <View style={styles.header}>
        <View style={styles.mainheader}>
          <TouchableOpacity onPress={() => navigate.openDrawer()} >
          <Icons  name='menu' size={30}></Icons>
          </TouchableOpacity>
          <Text style={styles.title}>Explore</Text>
          <TouchableOpacity onPress={()=>navigate.navigate("Cart",item)}>
          <Icons name='shopping-bag' size={30}></Icons>
          </TouchableOpacity>
        </View>
        <TextInput style={{ backgroundColor: 'white', height: 35 }} placeholder='Search...' ></TextInput>
        </View>
    )
}
export default Headers