import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0EFF2',
    },
    header:{
      paddingTop:40,
      marginBottom:25,
    },
    mainheader:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:30
    },
    mainheaderdetail:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:15
    },
    title:{
      fontSize:20,
      fontWeight:'bold'
    },
    logos:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:20
    },
    main:{
      flex:6,
    },
    headercontent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:15,
    },
    maincontent:{
        backgroundColor:'white',
        height:255,
        marginBottom:30,
        flex:1
    },
    maindetail:{
      height:550,
      marginBottom:10,
    },
    bottomcontent:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      
    },
    bottomdetail:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:20,
      marginHorizontal:15
    }
  });