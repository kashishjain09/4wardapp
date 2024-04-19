import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import colors from "../../styles/colors";

export const styles=StyleSheet.create({
    text:{
        fontSize:scale(24),
        fontWeight:"600",
        color:colors.textColor,
        lineHeight:verticalScale(32),
        marginLeft:moderateScale(20)
    },
    text2:{
        fontSize:scale(15),
        color:colors.subHeading,
        lineHeight:verticalScale(32),
        marginLeft:moderateScale(20)
    },
    nameInput:{
        color:colors.textColor,
        backgroundColor:colors.textBoxBg,
        padding:moderateScale(15),
        width:"40%",
        borderRadius:8,
        marginTop:verticalScale(20)
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    nextBtnContainer:{
        backgroundColor:colors.loginBtnBg,
        margin:moderateScale(20),
        borderRadius:8
    },
    nextBtn:{
        color:colors.textColor,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:scale(14),
        padding:moderateScale(20),
    }
})