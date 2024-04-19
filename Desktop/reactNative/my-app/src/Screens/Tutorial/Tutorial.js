import { View, Text, TouchableOpacity ,FlatList} from 'react-native'
import React, { useState } from 'react'
import navigationStrings from '../../constants/navigationStrings'
import Data from '../../Components/Data'
import TutorialCrousel from '../../Components/TutorialCrousel'
import WrapperContainer from '../../Components/WrapperContainer'
import { styles } from './styles'

export default function Tutorial({navigation}) {
    const [selectedId,setSelectedId]=useState(0)
    const NavigateToInitialLogin=()=>{
        navigation.navigate(navigationStrings.InitialLogin)
    }
  return (
    <WrapperContainer>
      <View style={{flex:.9}}>
        <FlatList
          data={Data}
          renderItem={({item,index})=>{
            return (
                <TutorialCrousel
                  item={item}
                  onPress={() => setSelectedId(index)}
                />
            )
          }}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item)=>item.id.toString()}
        />
        </View>
      <View style={{flex:.1}}>
      <View style={styles.crouselButtons}>
        <View style={{flexDirection:'row'}}>
          {
            Data.map((item,index)=>{
              return(
              <View key={index} style={[ styles.renderbtn, {borderColor: index === selectedId ? 'red' : 'white'}]} ></View>
            )
            })
          }
        </View>
        <TouchableOpacity onPress={()=>NavigateToInitialLogin()}>
              <Text style={styles.textStyle}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
      </View>
    </WrapperContainer>
  )
}
