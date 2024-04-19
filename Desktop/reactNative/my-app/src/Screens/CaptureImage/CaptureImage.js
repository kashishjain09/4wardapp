import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'

export default function Post1_1({navigation}) {
    const navigateToUploadInfoPost=()=>{
        navigation.navigate(navigationStrings.UploadInfoPost)
    }
  return (
    <View>
        <TouchableOpacity onPress={()=>navigateToUploadInfoPost()}>
            <Text>Click</Text>
        </TouchableOpacity>
    </View>
  )
}