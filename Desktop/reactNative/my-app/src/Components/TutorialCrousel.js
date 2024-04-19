import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TutorialCrousel({ item,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{height:647,width:328,backgroundColor:'#4C4C4C',alignItems:'center',justifyContent:'center',borderRadius:20,margin:5}}>
          <Image source={item.imgSrc} style={{height: 245 ,width: 267,marginBottom:100}}/>
          <Text style={{fontSize: 22,fontWeight:500,color:'#FFFFFF',lineHeight:32,textAlign:'center',margin:10}}>{item.title}</Text>
          <Text style={{fontSize: 13,textAlign:'center',lineHeight:22,letterSpacing:0,color: '#999999'}}>{item.subHeading}</Text>
      </View>
    </TouchableOpacity>
  )
}