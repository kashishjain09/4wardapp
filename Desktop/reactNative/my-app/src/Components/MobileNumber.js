import { View, Text ,Image ,TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { moderateScale,scale, verticalScale } from '../styles/scaling'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'

export default function MobileNumber() {
  return (
    <View style={styles.MobileCountryTextBox}>
        <View style={styles.countryDropDownBox}>
          <Image source={imagePath.flagImg} style={styles.flagImg} />
          <Text style={styles.text}>+1</Text>
          <Image source={imagePath.downArrow1} style={styles.downArrow} />
        </View>

        <View style={styles.mobileTextBox}>
          <TextInput
            placeholder="Mobile number"
            keyboardType="numeric"
            placeholderTextColor="#A6A6A6"
            style={{ color: '#A6A6A6' }}
          />
        </View>
      </View>
  )
}
const styles=StyleSheet.create({
  MobileCountryTextBox:{
    flexDirection:'row',justifyContent:'space-evenly',marginTop:verticalScale(20)
  },
  countryDropDownBox:{
  flex:.3,   flexDirection:'row',backgroundColor:colors.textBoxBg,borderRadius:8,alignItems:'center',justifyContent:"space-between",padding:moderateScale(15)
  },
  flagImg:{
    height:10,resizeMode:'contain'
  },
  text:{
    fontSize:scale(10),color:colors.textColor
  },
  downArrow:{
    height:9,resizeMode:'contain'
  },
  mobileTextBox:{
    backgroundColor:colors.textBoxBg,borderRadius:8,padding:moderateScale(15),flex:.7,marginLeft:moderateScale(10)
  },
})