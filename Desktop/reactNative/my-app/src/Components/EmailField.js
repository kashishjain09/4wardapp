import { StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from '../styles/scaling'
import colors from '../styles/colors'

export default function EmailField({innerText}) {
  return (
      <TextInput placeholder={innerText} style={styles.emailInput} placeholderTextColor={colors.subHeading}/>
  )
}
const styles=StyleSheet.create({
    emailInput:{
        color:colors.textColor,
        backgroundColor:colors.textBoxBg,
        padding:moderateScale(15),
        borderRadius:8,
        marginTop:verticalScale(10)
    },
})