import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import ButtonComp from '../../Components/ButtonComp'
import Headings from '../../Components/Headings'
import Location from '../../Components/PasswordField'
import { View } from 'react-native'

export default function SelectLocation() {
  return (
    <WrapperContainer>
      <View style={{flex:.9}}>
      <Headings heading={"Device Location is off"} subHeading={"Turning on device location will ensure acurate road alerts."}/>
      <Location passwordText={"Enter location manually"} secureText={false}/>
      </View>
      <View style={{flex:.1}}>
      <ButtonComp innerText={"SELECT AND PROCEED"}/>
      </View>
    </WrapperContainer>
  )
}