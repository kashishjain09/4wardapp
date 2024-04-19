import { Text,StyleSheet,View} from 'react-native'
import React from 'react'
import { verticalScale,scale, moderateScale } from '../styles/scaling'
import colors from '../styles/colors'

export default function SmallHeading({innerText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{innerText}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
      color:colors.textColor,
      fontWeight:"600",
      fontSize:scale(18),
      marginRight:moderateScale(10)
    },
    container:{
      marginLeft:20,
      marginTop:20
    }
})