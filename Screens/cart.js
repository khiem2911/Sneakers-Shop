import { Text, View, TouchableOpacity, FlatList, Image,ToastAndroid } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from '../CSS/style'
import {  useState, useEffect } from 'react'
function Cart() {
    const route = useRoute()
    const navigate = useNavigation()
    const [total,setTest]=useState([])
    const [check,Setcheck]=useState(false)
    const [result, setResult] = useState(0)
    const Content = ({ product }) => {
        const products = product.item
        return (
            <TouchableOpacity onPress={() => navigate.navigate("Detail", products)} >
                <View style={styles.maincontent}>
                    <View style={styles.headercontent}>
                        <Image source={products.linkhang} style={{ width: 60, height: 60 }}></Image>
                        <TouchableOpacity onPress={()=>handelDelete(products.id)} >
                        <Icon name='delete' size={25} color={'red'}/>
                        </TouchableOpacity>
                    </View>
                    <Image resizeMode='contain' style={{ width: 200, height: 100, alignSelf: 'center', marginBottom: 50 }} source={products.linkgiay}></Image>
                    <View style={styles.bottomcontent}>
                        <Text style={{ color: '#8e8e9f', fontSize: 15 }}>{products.name}</Text>
                        <Text style={{ color: '#3A63E0', fontWeight: 'bold' }}>$<Text style={{ color: 'black', fontSize: 20 }}>{products.price}</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const handelDelete=(id)=>{
        const newarr=total.filter(item=>(
            item.id!=id
        ))
        setTest(newarr)
        Setcheck(true)
    }
    useEffect(() => {
        if (total) {
            const price = total.reduce((tempt, item) => (
                tempt + item.price
            ), 0)
            setResult(price)
        }
        if(total==[])
        {
            setResult(0)
        }
    }, [total])
    useEffect(()=>{
            setTest(route.params)
    },[route.params])
    const handelBack=()=>{
        if(check)
        {
            const value={"check":true,total}
            Setcheck(false)
            navigate.navigate("Main",value)
        }else
        {
            navigate.goBack()
        }
    }
    const handelCheckout=()=>{
        setTimeout(() => {
            ToastAndroid.show("Checkout completed",ToastAndroid.SHORT)
        }, 1);
        const value={"checkout":true}
        navigate.navigate("Main",value)
    }
    return (
        <View style={{flex:1}} >
            <View style={{ paddingTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                <TouchableOpacity onPress={() => handelBack()}>
                    <Icons name='arrow-left' size={30}></Icons>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
                <Icons name='shopping-bag' size={30}></Icons>
            </View>
            <FlatList showsVerticalScrollIndicator={false} data={total}  renderItem={items => <Content product={items} />} />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',bottom:0 }}>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Price</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$ {result}</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#333333', paddingTop: 10, width: 130, height: 40, borderRadius: 100 }}>
                    <Text onPress={handelCheckout} style={{ color: 'white', alignSelf:'center' }}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Cart