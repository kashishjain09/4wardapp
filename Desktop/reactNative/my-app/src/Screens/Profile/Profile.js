import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import SmallHeading from '../../Components/SmallHeading'
import WrapperContainer from '../../Components/WrapperContainer'
import ProfileSettings from '../../Components/ProfileSettings'
import imagePath from '../../constants/imagePath'
import { moderateScale } from '../../styles/scaling'
import UserProfile from '../../Components/UserProfile'

export default function Profile({navigation}) {
  const navigateToEditProfile=()=>{
    navigation.navigate(navigationStrings.Edit_Profile)
  }
  const navigateToChangePassword=()=>{
    navigation.navigate(navigationStrings.Change_Password)
  }
  const backToTutorial=()=>{
    navigation.popToTop()
  }
  return (
    <WrapperContainer>
        <SmallHeading innerText={"Profile"}/>
      <ProfileSettings innerText={"Edit Profile"} imgSrc={imagePath.user} onPress={()=>navigateToEditProfile()}/>
      <ProfileSettings innerText={"Change Password"} imgSrc={imagePath.key} onPress={()=>navigateToChangePassword()}/>
      <ProfileSettings innerText={"Signout"} imgSrc={imagePath.logout} onPress={()=>backToTutorial()}/>
    </WrapperContainer>
  )
}