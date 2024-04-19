import { StyleSheet } from "react-native"
import {moderateScale, scale,verticalScale } from "../../styles/scaling"
import colors from "../../styles/colors"

export const styles=StyleSheet.create({
    crouselButtons:{
      flexDirection:'row',justifyContent:'space-between'
    },
    renderbtn:{
        borderRightWidth:10,borderLeftWidth:10,borderRadius:3,height:4,margin:moderateScale(5)
    },
    textStyle:{
      color:colors.textColor,fontSize:scale(15),paddingBottom:verticalScale(15),fontWeight:"bold"
    }
})