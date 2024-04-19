import {  Text ,View } from 'react-native'
import React, { useState } from 'react'
import navigationStrings from '../../constants/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'
import BackArrow from '../../Components/BackArrow'
import { styles } from './styles'
import SmoothPinCodeInput from "react-native-smooth-pincode-input"
import colors from '../../styles/colors'
import { moderateScale, verticalScale } from '../../styles/scaling'
import ButtonComp from '../../Components/ButtonComp'
 
export default function TwoStepVerification({ navigation }) {
    const [code, setCode] = useState("")

    const navigateToSetPassword = () => {
        navigation.navigate(navigationStrings.SetPassword)
    }

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleCodeChange = (newCode) => {
        setCode(newCode)
    }
 
    return (
        <WrapperContainer>
            <View style={{flex:.9}}>
            <BackArrow Previous={handleGoBack}/>
            <Text style={styles.heading}>Enter the 4-digit code sent to you at 875 364 8947</Text>
            <Text style={styles.subHeading}>Edit my mobile number</Text>
            <SmoothPinCodeInput
                value={code}
                onTextChange={handleCodeChange}
                cellSpacing={10}
                cellSize={40}
                cellStyle={{
                  borderRadius: 8,
                  backgroundColor: colors.textBoxBg,
                  height:48,
                }}
                textStyle={{
                  color:colors.textColor
                }}
                containerStyle={{
                  marginTop:verticalScale(10)
                }}

                animated={false} 
            />
            <Text style={styles.timer}>Resend code in 0:14</Text>
            </View>
            <View style={{flex:.1}}>
            <ButtonComp innerText={"Verify"} onPress={()=>navigateToSetPassword()}/>
            </View>
        </WrapperContainer>
    )
}
