import { View, Text ,Image, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { height, moderateScale, scale, verticalScale } from '../styles/scaling'
import colors from '../styles/colors'

export default function ProfileSettings({innerText,onPress=()=>{},imgSrc}) {
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={imgSrc} style={styles.img}/>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.textContainer}>
            <Text style={styles.text}>{innerText}</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:0.1,
        padding:moderateScale(10)
    },
    img:{
        height:20,
        resizeMode:'contain',
    },
    text:{
        color:colors.textColor,
        fontSize:scale(15),
        paddingLeft:moderateScale(20)
    },
    textContainer:{
        justifyContent:'center'
    },
    imgContainer:{
        justifyContent:'center'
    }
    
})