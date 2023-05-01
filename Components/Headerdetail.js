import { Text,  View,TouchableOpacity,Image } from 'react-native';
import Icons from 'react-native-vector-icons/Feather'
import { styles } from '../CSS/style'
import {useNavigation} from '@react-navigation/native'
function Headers({items}){
  const navigate=useNavigation()
    return (
        <View style={styles.header}>
        <View style={styles.mainheaderdetail}>
          <TouchableOpacity onPress={()=>navigate.goBack()}>
          <Icons  name='arrow-left' size={30}></Icons>
          </TouchableOpacity>
          <Text style={styles.title}>Running</Text>
          <TouchableOpacity onPress={() => navigate.navigate("Favorite",items)} >
          <Image source={require('../assets/tim.png')} style={{ width: 30, height: 30, tintColor:'red' }}></Image>
          </TouchableOpacity>
        </View>
        </View>
    )
}
export default Headers