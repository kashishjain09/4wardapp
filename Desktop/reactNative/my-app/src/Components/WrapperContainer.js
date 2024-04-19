import { StatusBar, StyleSheet, View } from "react-native";
import colors from "../styles/colors";
import { moderateScale } from "../styles/scaling";

const WrapperContainer = ({ children }) => {
 return(
  <View style={styles.container}>
    <StatusBar/>
    {children}
  </View>
 )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    paddingHorizontal:moderateScale(20)
  },
});

export default WrapperContainer;
