import { View, Text, StyleSheet ,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import { moderateScale, verticalScale, width } from '../styles/scaling'
import * as ImagePicker from "expo-image-picker"
import CustomModal from './Modal'

export default function UserProfile() {
  const [modalVisible,setModalVisible]=useState(false)
  const [image,setImage]=useState(null)
  const uploadImage= async (mode)=>{ 
    try{
      let result={}
      if(mode ==="gallery"){
        await ImagePicker.requestMediaLibraryPermissionsAsync()
        result=await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          allowsEditing:true,
          aspect:[1,1],
          quality:1
        })

      }
      else{
          await ImagePicker.requestCameraPermissionsAsync() 
          result=await ImagePicker.launchCameraAsync({
          cameraType:ImagePicker.CameraType.back,
          allowsEditing:true,
          aspect:[1,1],
          quality:1
        })
      }
      if(!result.canceled){
        await saveImage(result.assets[0].uri)
      }
    }
    catch(error){
      alert("Error in uploading the image" + error)
      setModalVisible(false)
    }
  }
  const saveImage = async (imageUrl) => {
    try {
      if (!imageUrl) {
        console.log("no url present")
        setImage(null);
      } else {
        console.log("uri present" ,imageUrl)
        setImage(imageUrl);
      }
      setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };
  const removeImage=async()=>{
    try{
      console.log("remove function")
      saveImage(null)
    }
    catch(error){
      setModalVisible(false)
    }
  }
  const openModal=()=>{
    setModalVisible(true)
  }
  const closeModal=()=>{
    setModalVisible(false) 
  }
  return (
    <View style={styles.imgContainer}>
      <Image source={{ uri: image }} style={styles.img} />
      <TouchableOpacity hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }} onPress={()=>openModal()}>
      <Image source={imagePath.edit} style={styles.img1}/>
      </TouchableOpacity>
      <CustomModal visible={modalVisible} closeModal={closeModal} onCameraPress={()=>uploadImage()} onGalleryPress={()=>uploadImage("gallery")} onPressRemove={()=>removeImage()}/>
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
        bottom:verticalScale(1),
        // right:moderateScale(118)
        
    }
})