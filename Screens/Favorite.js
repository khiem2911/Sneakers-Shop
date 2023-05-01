import { Text, View, TouchableOpacity, Image,FlatList } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather'
import { Rating } from 'react-native-ratings';
import { styles } from '../CSS/style'
function Favorite() {
    const route = useRoute()
    const navigate = useNavigation()
    const Content=({product})=>{
       const products=product.item
        return(
            <TouchableOpacity onPress={() => navigate.navigate("Detail", products)} >
            <View style={styles.maincontent}>
                <View style={styles.headercontent}>
                    <Image source={products.linkhang} style={{ width: 60, height: 60 }}></Image>
                </View>
                <Image resizeMode='contain' style={{ width: 200, height: 100, alignSelf: 'center', marginBottom: 50 }} source={products.linkgiay}></Image>
                <View style={styles.bottomcontent}>
                    <Text style={{ color: '#8e8e9f', fontSize: 15 }}>{products.name}</Text>
                    <Text style={{ color: '#3A63E0', fontWeight: 'bold' }}>$<Text style={{ color: 'black', fontSize: 20 }}>{products.price}</Text></Text>
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
    return (

        <View >
            <View style={{ paddingTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',paddingBottom:10 }}>
                <TouchableOpacity onPress={() => navigate.goBack()}>
                    <Icons name='arrow-left' size={30}></Icons>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Favorite</Text>
                <Image source={require('../assets/tim.png')} style={{ width: 30, height: 30, tintColor:  "red" }}></Image>
            </View>
            <View style={styles.content}>
                <FlatList style={{ marginBottom: 100 }} data={route.params} showsVerticalScrollIndicator={false}  renderItem={items => <Content product={items} />} />
            </View>
        </View>
    )
}
export default Favorite