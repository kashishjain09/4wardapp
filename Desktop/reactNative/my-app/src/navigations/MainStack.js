import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';

import MainTabs from './MainTabs';
import { CaptureImage, ChangePassword, EditProfile, InitialLogin,LoginWithPhoneNo,SelectLocation, SetPassword, SignUp, Tutorial, TwoStepVerification, UploadInfoPost } from '../Screens';
const Stack = createStackNavigator();
export default function MainStack() {
  return (
        <Stack.Navigator initialRouteName={navigationStrings.Tutorial} screenOptions={{headerShown:false}}>
            <Stack.Screen name={navigationStrings.Tutorial} component={Tutorial}/>
            <Stack.Screen name={navigationStrings.InitialLogin} component={InitialLogin} />
            <Stack.Screen name={navigationStrings.LoginWithPhoneNo} component={LoginWithPhoneNo}/>
            <Stack.Screen name={navigationStrings.CaptureImage} component={CaptureImage}/>
            <Stack.Screen name={navigationStrings.UploadInfoPost} component={UploadInfoPost}/>
            <Stack.Screen name={navigationStrings.Edit_Profile} component={EditProfile}/>
            <Stack.Screen name={navigationStrings.Change_Password} component={ChangePassword}/>
            <Stack.Screen name={navigationStrings.SignUp} component={SignUp}/>
            <Stack.Screen name={navigationStrings.TwoStepVerification} component={TwoStepVerification}/>
            <Stack.Screen name={navigationStrings.SetPassword} component={SetPassword}/>
            <Stack.Screen name={navigationStrings.SelectLocation} component={SelectLocation}/>
            <Stack.Screen name={navigationStrings.MainTabs} component={MainTabs}/>
        </Stack.Navigator>
  )
}