import { View } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'
import BackArrow from '../../Components/BackArrow'
import Headings from '../../Components/Headings'
import Password from '../../Components/PasswordField'
import ButtonComp from '../../Components/ButtonComp'
import { moderateScale } from '../../styles/scaling'

export default function SetPassword({navigation}) {
    const navigateToSetLocation=()=>{
        navigation.navigate(navigationStrings.SelectLocation)
    }
    const handleGoBack = () => {
      navigation.goBack()
    }
  return (
    <WrapperContainer>
        <View style={{flex:.9}}>
        <BackArrow Previous={handleGoBack}/>
        <Headings heading={"Set password"} subHeading={"Create secure and unique password."}/>
        <Password passwordText={"Password"} showText={"Show"} secureText={true}/>
        <Password passwordText={"Confirm password"} showText={"Show"} secureText={true}/>
        </View>
        <View style={{flex:.1,marginBottom:moderateScale(8)}}>
        <ButtonComp innerText={"GET STARTED"} onPress={()=>navigateToSetLocation()}/>
        </View>
    </WrapperContainer>
  )
}