import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, verticalScale } from '../styles/scaling'

export default function FullName({firstName,lastName}) {
  return (
    <View style={styles.nameContainer}>
        <TextInput placeholder={firstName} style={[styles.nameInput,{marginRight:moderateScale(10)}]} placeholderTextColor={colors.subHeading}/>
        <TextInput placeholder={lastName} style={styles.nameInput} placeholderTextColor={colors.subHeading}/>
    </View>
  )
}
const styles=StyleSheet.create({
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    nameInput:{
        flex:.5,
        color:colors.textColor,
        backgroundColor:colors.textBoxBg,
        padding:moderateScale(15),
        borderRadius:8,
        marginTop:verticalScale(20)
    },
})