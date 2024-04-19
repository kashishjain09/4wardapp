import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import ButtonComp from '../../Components/ButtonComp'
import Password from '../../Components/PasswordField'
import SmallHeading from '../../Components/SmallHeading'
import { View ,StyleSheet} from 'react-native'
import { verticalScale } from '../../styles/scaling'
import BackArrow from '../../Components/BackArrow'
import { moderateScale } from '../../styles/scaling'
export default function ChangePassword({navigation}) {
  const handleGoback=()=>{
    navigation.goBack()
  }
  return (
    <WrapperContainer>
      <View style={{flex:.9}}>
      <View style={styles.container}>
        <BackArrow Previous={handleGoback}/>
        <SmallHeading innerText={"Change Password"}/>
      </View>
      <Password passwordText={"Password"} showText={"Show"} secureText={true}/>
      <Password passwordText={"Confirm password"} showText={"Show"} secureText={true}/>
      </View>
      <View style={{flex:.1,marginBottom:moderateScale(8)}}>
      <ButtonComp innerText={"SAVE"}/>
      </View>
    </WrapperContainer>
  )
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    marginBottom:verticalScale(20)
  }
})
