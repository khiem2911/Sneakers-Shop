import { styles } from '../CSS/style.js'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
function Shoes({ item }) {
  const navigation = useNavigation()
  return (

    <TouchableOpacity onPress={() => navigation.navigate("Detail", item)} >
      <View style={styles.maincontent}>
        <View style={styles.headercontent}>
          <Image source={item.linkhang} style={{ width: 60, height: 60 }}></Image>
        </View>
        <Image resizeMode='contain' style={{ width: 200, height: 100, alignSelf: 'center', marginBottom: 50 }} source={item.linkgiay}></Image>
        <View style={styles.bottomcontent}>
          <Text style={{ color: '#8e8e9f', fontSize: 15 }}>{item.name}</Text>
          <Text style={{ color: '#3A63E0', fontWeight: 'bold' }}>$<Text style={{ color: 'black', fontSize: 20 }}>{item.price}</Text></Text>
        </View>
        <Rating
          imageSize={15}
          style={{ alignSelf: 'flex-start' }}
          readonly={true}
        />
      </View>
    </TouchableOpacity>

  )
}
export default Shoes