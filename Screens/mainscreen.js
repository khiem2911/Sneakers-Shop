import {  View,  ScrollView,TouchableOpacity,Image,Text, Button } from 'react-native';
import { styles } from '../CSS/style'
import Shoses from '../Components/Shoses'
import {products} from '../Components/constant'
import { logos } from '../Components/constant'
import  Header  from '../Components/Header';
import {useEffect, useState} from 'react'
import {useRoute} from '@react-navigation/native'
export default function Mainscreen() {
  const route=useRoute()
  const [shoesss,setshoes]=useState([])
    const [logo, setlogo] = useState('nike-logo.png')
    const [product,setProduct]=useState('nike')
    const handelLogo = (e) => {
      setlogo(e)
      setProduct(e.slice(0,-9))
    }
    useEffect(()=>{
      if(route.params)
      {
        if(route.params.check)
        {
            const newarr=route.params.total
            setshoes(newarr)
        }else if(route.params.checkout)
        {
          setshoes([])
        }
        else
        {
          setshoes([...shoesss,route.params])
        }
       
      }
    },[route.params])
    return (
      <View style={styles.container}>
        <Header item={shoesss}/>
        <View style={styles.main}>
          <View style={styles.logos}>
          {logos.map(item => (
          <TouchableOpacity onPress={() => handelLogo(item.name)}>
            <Image source={item.link} style={{ width: 50, height: 50, tintColor: item.name === logo ? '#2c2b30' : '#c6c6c8' }} />
          </TouchableOpacity>
        ))}
          </View>
          <View style={styles.content}>
            <ScrollView style={{marginBottom:50}} >
            {products.map((item,index) =>(
              item.hang===product && <Shoses key={index} item={item}/>
            ))}
             </ScrollView>
          </View>
        </View>
      </View>
    );
  }