import { StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import { moderateScale, verticalScale } from '../styles/scaling'


export default function BackArrow({Previous}) {
  return (
    <TouchableOpacity onPress={Previous} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
        <Image source={imagePath.arrowImg} style={styles.imgStyle}/>
      </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    imgStyle:{
      resizeMode:'contain',marginTop:verticalScale(10), width:20
    }
})