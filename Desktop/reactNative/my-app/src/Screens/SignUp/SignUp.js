import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'
import BackArrow from '../../Components/BackArrow'
import MobileNumber from '../../Components/MobileNumber'
import ButtonComp from '../../Components/ButtonComp'
import FullName from '../../Components/FullName'
import Headings from '../../Components/Headings'
import EmailField from '../../Components/EmailField'
import { View } from 'react-native'

export default function SignUp({navigation}) {

    const navigateToTwoStepVerification=()=>{
      navigation.navigate(navigationStrings.TwoStepVerification)
    }
    const handleGoBack=()=>{
      navigation.navigate(navigationStrings.InitialLogin)
    }
  return (
    <WrapperContainer>
      <View style={{flex:.9}}>
      <BackArrow Previous={handleGoBack}/>
      <Headings heading={"Create new account"} subHeading={"Create an account so you can continue"}/>
      <FullName firstName={"First name"} lastName={"Last name"}/>
      <EmailField innerText={"Email"}/>
      <MobileNumber/>
      </View>
      <View style={{flex:.1}}>
      <ButtonComp innerText={"Next"} onPress={() => navigateToTwoStepVerification()}/>
      </View>
    </WrapperContainer>
  )
}