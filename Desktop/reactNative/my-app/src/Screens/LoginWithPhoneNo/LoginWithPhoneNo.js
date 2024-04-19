import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';
import BackArrow from '../../Components/BackArrow';
import MobileNumber from '../../Components/MobileNumber';
import ButtonComp from '../../Components/ButtonComp';
import Password from '../../Components/PasswordField';
import Headings from '../../Components/Headings';
import { moderateScale, verticalScale } from '../../styles/scaling';
export default function LoginWithPhoneNo({ navigation }) {
  const navigateToHomeScreen = () => {
    navigation.navigate(navigationStrings.MainTabs);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <WrapperContainer>
     <View style={{flex:.9}}>
     <BackArrow Previous={handleGoBack}/>
      <Headings heading={"Welcome back!"} subHeading={"We are happy to see you. You can login to continue."}/>
      <MobileNumber />
      <Password passwordText={"Password"} showText={"Show"} secureText={true}/>
      <View style={styles.forgotOTPContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.TwoStepVerification)}>
          <Text style={styles.useOTP}>Use OTP</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPass}>Forgot Password?</Text>
      </View>
     </View>
    <View style={{flex:.1,marginBottom:moderateScale(8)}}>
    <ButtonComp innerText={"LOGIN"}  onPress={() => navigateToHomeScreen()}/>
    </View>
    </WrapperContainer>
  );
}
