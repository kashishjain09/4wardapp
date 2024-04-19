import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import colors from "../../styles/colors";
export const styles=StyleSheet.create({
    imgStyle:{
        height:17,resizeMode:'contain'
    },
    textWelcome:{
        fontSize:scale(24),fontWeight:"600",color:colors.textColor
    },
    belowText:{
        color:colors.subHeading,fontSize:scale(15)
    },
    MobileCountryTextBox:
    {
        flexDirection:'row',justifyContent:'space-evenly',margin:moderateScale(10)
    },
    text:{
        fontSize:scale(10),color:colors.textColor
    },
    flagImg:{
        height:10,resizeMode:'contain'
    },
    downArrow:{
        height:9,resizeMode:'contain'
    },
    countryDropDownBox:{
        flexDirection:'row',backgroundColor:colors.textBoxBg,borderRadius:8,alignItems:'center',padding:moderateScale(10)
    },
    mobileTextBox:{
        backgroundColor:colors.textBoxBg,borderRadius:8,padding:moderateScale(10),width:'62%'
    },
    passwordField:{
        flexDirection:'row',borderRadius:8,backgroundColor:'#4C4C4C',justifyContent:'space-between',alignItems:'center',marginHorizontal:moderateScale(23),paddingLeft:moderateScale(10),paddingRight:moderateScale(10)
    },
    showbtn:{
        color:colors.subHeading
    },
    passwordtextBox:{
        color:colors.textColor,height:50, flex:1
    },
    useOTP:{
        color:colors.textColor,fontSize:14
    },
    forgotPass:{
        color:colors.blueText,fontSize:14
    },
    forgotOTPContainer:{
        flexDirection:'row',justifyContent:'space-between',marginTop:verticalScale(10)
    },
    loginBtnContainer:{
        margin:moderateScale(20)
    },
    textMargin:{
        margin:moderateScale(10),paddingLeft:moderateScale(11)
    },
    loginBtn:{
        color:colors.textColor,fontSize:14,backgroundColor:colors.loginBtnBg,textAlign:'center',padding:moderateScale(20),borderRadius:8,fontWeight:'bold'}
    
})