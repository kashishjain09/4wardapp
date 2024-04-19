import { View} from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import ButtonComp from '../../Components/ButtonComp'
import navigationStrings from '../../constants/navigationStrings'
import BackArrow from '../../Components/BackArrow'
import SmallHeading from '../../Components/SmallHeading'
import FullName from '../../Components/FullName'
import EmailField from '../../Components/EmailField'
import MobileNumber from '../../Components/MobileNumber'
import { styles } from './styles'
import UserProfile from '../../Components/UserProfile'

export default function EditProfile({navigation}) {
  const handleGoback=()=>{
    navigation.goBack()
  }
  return (
    <WrapperContainer>
      <View style={{flex:.9}}>
       <View style={styles.container}>
        <BackArrow Previous={handleGoback}/>
        <SmallHeading innerText={"Edit Profile"}/>
      </View>
      <UserProfile/>
      <FullName firstName={"First name"} lastName={"Last name"}/>
      <EmailField innerText={"Email"}/>
      <MobileNumber/>
      </View>
      <View style={{flex:.1}}>
      <ButtonComp innerText={"SAVE CHANGES"}/>
      </View>
    </WrapperContainer> 
  )
}