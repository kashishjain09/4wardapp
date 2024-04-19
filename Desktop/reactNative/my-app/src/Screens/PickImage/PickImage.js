import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'

export default function PickImage({navigation}) {
  const navigateToCaptureImage=()=>{
    navigation.navigate(navigationStrings.CaptureImage)
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>navigateToCaptureImage()}>
        <Text>Camera</Text>
      </TouchableOpacity>
    </View>
  )
}