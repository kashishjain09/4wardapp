import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import { moderateScale, verticalScale, width } from '../styles/scaling'

export default function UserProfile() {
  return (
    <View style={styles.imgContainer}>
      <Image source={imagePath.userProfile} style={styles.img}/>
      <Image source={imagePath.edit} style={styles.img1}/>
    </View>
  )
}
const styles=StyleSheet.create({
    img:{
        height:100,
        width: width * 0.28,
        resizeMode:'contain',
        borderColor:colors.textColor,
        borderWidth:5,
        borderRadius:50
    },
    imgContainer:{
        alignItems:'center',
    },
    img1:{
        height:20,
        resizeMode:'contain',
        position:'absolute',
        top:verticalScale(70),
        right:moderateScale(118)
        
    }
})