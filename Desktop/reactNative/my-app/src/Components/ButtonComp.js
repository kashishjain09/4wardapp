import {Text ,TouchableOpacity, StyleSheet} from 'react-native'
import { moderateScale,scale, verticalScale } from '../styles/scaling'
import colors from '../styles/colors'
import React from 'react'
 
export default function ButtonComp({innerText,onPress=()=>{}}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.loginWithPhone}>{innerText}</Text>
      </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  loginWithPhone:{
      color:colors.textColor,backgroundColor:colors.loginBtnBg,borderRadius:6,fontSize:scale(14),fontWeight:'bold',textAlign:'center',padding:moderateScale(10),
  }
})