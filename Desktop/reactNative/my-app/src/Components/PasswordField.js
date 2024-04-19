import { View, Text, StyleSheet ,TouchableOpacity ,TextInput} from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, verticalScale } from '../styles/scaling'

export default function Password({passwordText,showText,secureText}) {
  return (
    <View style={styles.passwordField}>
        <TextInput
          placeholder={passwordText}
          secureTextEntry={secureText}
          style={styles.passwordtextBox}
          placeholderTextColor="#A6A6A6"
        />
          <TouchableOpacity>
            <Text style={styles.showbtn}>{showText}</Text>
          </TouchableOpacity>
      </View>
  )
}
const styles=StyleSheet.create({
    passwordField:{
        flexDirection:'row',borderRadius:8,backgroundColor:'#4C4C4C',justifyContent:'space-between',alignItems:'center',paddingLeft:moderateScale(10),paddingRight:moderateScale(10),marginTop:verticalScale(10),padding:moderateScale(5),marginBottom:verticalScale(10)
    },
    passwordtextBox:{
        color:colors.textColor,height:50, flex:1
    },
    showbtn:{
        color:colors.subHeading
    },
})