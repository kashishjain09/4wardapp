import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import { Image } from 'react-native';
import { Home, Notification, PickImage, Profile, Search } from '../Screens/index'
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();
export default function MainTabs() {
  return ( 
        <Tab.Navigator screenOptions={{headerShown:false,tabBarLabelStyle:{display:'none'},tabBarStyle:{backgroundColor:colors.textBoxBg,height:60}}}> 
            <Tab.Screen name={navigationStrings.Home} component={Home} 
            options=
            {{tabBarIcon:({focused})=>(
            <Image source={imagePath.home} style={{height:25,tintColor:focused?'red':'white',resizeMode:'contain'}}/>
            ),
            }}/>
            <Tab.Screen name={navigationStrings.PickImage} component={PickImage} options=
            {{tabBarIcon:({focused})=>
            <Image source={imagePath.search} style={{height:25,tintColor:focused?'red':'white',resizeMode:'contain'}}/>
            }} />
            <Tab.Screen name={navigationStrings.Search} component={Search} options=
            {{tabBarIcon:({focused})=>
            <Image source={imagePath.add} style={{height:25,tintColor:focused?'red':'white',resizeMode:'contain'}}/>
            }}/>
            <Tab.Screen name={navigationStrings.Notification} component={Notification} options=
            {{tabBarIcon:({focused})=>
            <Image source={imagePath.notify} style={{height:25,tintColor:focused?'red':'white',resizeMode:'contain'}}/>
            }}/>
            <Tab.Screen name={navigationStrings.Profile} component={Profile} options=
            {{tabBarIcon:({focused})=>
            <Image source={imagePath.profile} style={{height:25,tintColor:focused?'red':'white',resizeMode:'contain'}}/>
            }}/>
        </Tab.Navigator>
  )
}