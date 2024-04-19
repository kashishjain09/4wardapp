import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";

export const styles=StyleSheet.create({
    heading:{
    color:colors.textColor,
    fontSize:scale(24),
    fontWeight:"600",
    marginTop:verticalScale(10)
    },
    subHeading:{
        color:colors.blueText,
        fontSize:scale(15),
        lineHeight:verticalScale(32),
    },
    timer:{
        fontSize:scale(15),
        color:colors.textColor,
        lineHeight:verticalScale(32),
        marginTop:verticalScale(150)
    },
    verifyBtnContainer:{
        margin:moderateScale(20)
    },
    verifyBtn:{
        color:colors.textColor,fontSize:14,backgroundColor:colors.loginBtnBg,textAlign:'center',padding:moderateScale(20),borderRadius:8,fontWeight:'bold'
    }
})