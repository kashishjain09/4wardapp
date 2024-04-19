import { Text ,StyleSheet} from "react-native";
import React from "react";
import { moderateScale ,scale, verticalScale } from "../styles/scaling";
import colors from "../styles/colors";

export default function Headings({heading,subHeading}) {
  return (
    <>
    <Text style={styles.textWelcome}>{heading}</Text>
    <Text style={styles.belowText}>{subHeading}</Text>
    </>
  ); 
}
const styles=StyleSheet.create({
    textWelcome:{
        fontSize:scale(24),fontWeight:"600",color:colors.textColor,marginBottom:verticalScale(10),marginTop:verticalScale(10)
    },
    belowText:{
      color:colors.subHeading,fontSize:scale(15)
  },
})
