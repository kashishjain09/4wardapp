import { View, Text ,TouchableOpacity ,Image ,StyleSheet} from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale ,verticalScale,scale} from '../styles/scaling'
import imagePath from '../constants/imagePath'


export default function AuthBtns() {
  return (
    <View>
        <TouchableOpacity>
          <View style={styles.authButtons}>
            <Image source={imagePath.google} style={styles.btnImg} />
            <Text style={styles.btnText}>Log In with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.authButtons}>
            <Image source={imagePath.facebook} style={styles.btnImg} />
            <Text style={styles.btnText}>Log In with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.authButtons}>
            <Image source={imagePath.apple} style={styles.btnImg} />
            <Text style={styles.btnText}>Log In with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}
const styles=StyleSheet.create({
    authButtons:{
        flexDirection:'row',backgroundColor:colors.textColor,paddingHorizontal:moderateScale(90),padding:15,borderRadius:6,marginBottom:verticalScale(10),paddingStart:moderateScale(10),justifyContent:'space-between'
    },
    btnImg:{
        height:20,width:'10%',resizeMode:'contain'
    },
    btnText:{
        fontSize:scale(13.9),fontWeight:'bold',color:'black'
    }
})