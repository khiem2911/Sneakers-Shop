import { useRoute, useNavigation } from '@react-navigation/native';
import Headers from '../Components/Headerdetail'
import { styles } from '../CSS/style.js'
import { useState, useEffect } from 'react'
import { TouchableOpacity, View, Image, Text, FlatList, ToastAndroid } from 'react-native'
import { Rating } from 'react-native-ratings';
import Swiper from 'react-native-swiper'
function Detail() {
    const route = useRoute()
    const navigate = useNavigation()
    const item = route.params
    const [idsize, setSize] = useState(39)
    const [status, setStatus] = useState("Des")
    const [favo, setFavo] = useState([])
    const size = [39, 40, 41, 42, 43, 44, 45]
    const images = [item.linkgiay, item.linkgiay2, item.linkgiay3]
    const handelTim = (tim) => {
        item.tim = tim
        if (tim) {
            setFavo([...favo, item])
        } else {
            const newarr = favo.filter(items => (
                item !== items
            ))
            setFavo(newarr)
        }
    }
    const handelSize = (size) => {
        setSize(size)
        item.size = size
    }
    const handelCart = () => {
        setTimeout(() => {
            ToastAndroid.show("Added to cart",ToastAndroid.SHORT)
        }, 1);
        navigate.navigate("Main",item)
    }
    function Size({ title }) {
        return (
            <TouchableOpacity onPress={() => handelSize(title.item)} >
                <View style={{ marginHorizontal: 20, borderWidth: 2, borderColor: title.item === idsize ? '#3A63E0' : '#f0eff2', borderRadius: 50, padding: 8 }}>
                    <Text style={{ color: title.item === idsize ? '#3A63E0' : 'black', fontWeight: 'bold' }} >{title.item}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#313B5D' }}>
            <View style={{ backgroundColor: '#3A63E0', height: '92%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ backgroundColor: 'white', height: '93%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                    <Headers items={favo} />
                    <View style={styles.maindetail}>
                        <View style={styles.headercontent}>
                            <Image source={item.linkhang} style={{ width: 60, height: 60 }}></Image>
                            <TouchableOpacity onPress={() => handelTim(!item.tim)}>
                                <Image source={require('../assets/tim.png')} style={{ width: 30, height: 30, tintColor: item.tim ? "red" : "#9ca3af" }}></Image>
                            </TouchableOpacity>
                        </View>
                        <Swiper paginationStyle={{ top: 230 }} activeDotColor='blue' activeDotStyle={{ width: 20, height: 8 }} autoplay={true}>
                            {images.map(item => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image resizeMode='contain' source={item} />
                                </View>
                            ))}
                        </Swiper>
                        <View style={styles.bottomdetail}>
                            <Text style={{ color: '#8e8e9f', fontSize: 15 }}>{item.name}</Text>
                            <Text style={{ color: '#3A63E0', fontWeight: 'bold' }}>$<Text style={{ color: 'black', fontSize: 20 }}>{item.price}</Text></Text>
                        </View>
                        <View >
                            <Rating
                                imageSize={15}
                                style={{ alignSelf: 'flex-start', marginLeft: 15 }}
                                readonly={true}
                            />
                            <Text style={{ paddingTop: 15, marginLeft: 15 }}>Select size</Text>
                            <FlatList data={size}
                                renderItem={items => <Size title={items} />}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginBottom: 30 }}
                            >
                            </FlatList>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <TouchableOpacity onPress={() => setStatus("Des")}>
                                    <Text style={{ marginRight: 10, borderBottomColor: status === "Des" ? "#3A63E0" : "white", borderBottomWidth: 2, paddingBottom: 6 }}>DESCRIPTION</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setStatus("Deli")}>
                                    <Text style={{ marginRight: 10, borderBottomColor: status === "Deli" ? "#3A63E0" : "white", borderBottomWidth: 2, paddingBottom: 6 }}>DELIVERY</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setStatus("Revi")}>
                                    <Text style={{ borderBottomColor: status === "Revi" ? "#3A63E0" : "white", borderBottomWidth: 2, paddingBottom: 6 }}>REVIEWS</Text>
                                </TouchableOpacity>
                            </View>
                            {status === "Des" && <Text>{item.des}</Text>}
                            {status === "Deli" && <Text>Lorem Ipsum .</Text>}
                            {status === "Revi" && <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>}
                        </View>
                    </View>
                </View>
                <Text style={{ alignSelf: 'center', paddingTop: 15, color: 'white' }}>Do you need assistance?</Text>
            </View>
            <TouchableOpacity onPress={() => handelCart()}>
                <Text style={{ alignSelf: 'center', paddingTop: 15, color: 'white', fontSize: 20 }}>$ {item.price} - Add to cart</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Detail