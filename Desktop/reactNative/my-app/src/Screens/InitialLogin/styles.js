import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, scale, verticalScale, width } from "../../styles/scaling";
export const styles=StyleSheet.create({
    imgContainer:{
        flex:.4,justifyContent:'center',alignItems:'center'
    },
    img:{
        resizeMode:'contain',height:width/0.72
    },
    textContainer:{
        flex:.6
    },
    text:{
        color:colors.lightTextColor,textAlign:'center',marginBottom:verticalScale(20)
    },
    orText:{
        fontSize:scale(16),textAlign:'center',color:colors.textColor,margin:moderateScale(20)
    },
    lastText:{
        flexDirection:'row',justifyContent:'center',marginTop:verticalScale(10)
    },
    newHereText:{
        fontSize:scale(14),color:'#FFFF',fontWeight:"600"
    },
    signupText:{
        fontSize:scale(14),color:'#41CCFF',fontWeight:"600"
    }
})