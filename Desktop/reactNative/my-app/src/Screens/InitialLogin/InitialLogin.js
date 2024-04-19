import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import navigationStrings from "../../constants/navigationStrings";
import WrapperContainer from "../../Components/WrapperContainer";
import { styles } from "./styles";
import imagePath from "../../constants/imagePath";
import AuthBtns from "../../Components/AuthBtns";
import ButtonComp from "../../Components/ButtonComp";

export default function InitialLogin({ navigation }) {
  const navigateToLoginWithPhoneNo = () => {
    navigation.navigate(navigationStrings.LoginWithPhoneNo);
  };
  const navigateToSignupScreen = () => {
    navigation.navigate(navigationStrings.SignUp);
  };
  return (
    <WrapperContainer>
      <View style={styles.imgContainer}>
        <Image source={imagePath.InitialLoginLogo} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          By clicking "Log In", you agree with our{" "}
          <Text style={{ fontWeight: "bold" }}>Terms</Text>.Learn how we process
          your data in our <Text style={{ fontWeight: "bold" }}>Privacy</Text>{" "}
          policy.
        </Text>
      <ButtonComp
        innerText={"Logn In with Phone number"}
        onPress={() => navigateToLoginWithPhoneNo()}
      />
      <Text style={styles.orText}>or</Text>
      <AuthBtns />
      <TouchableOpacity onPress={() => navigateToSignupScreen()}>
        <View style={styles.lastText}>
          <Text style={styles.newHereText}>New here?</Text>
          <Text style={styles.signupText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      </View>
    </WrapperContainer>
  );
}
