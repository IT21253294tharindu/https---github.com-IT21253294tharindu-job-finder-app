import { useState } from "react";
import {ScrollView,SafeAreaView,StyleSheet,View} from "react-native";
import {Stack,useRouter} from 'expo-router';
import { COLORS,icons,images,SIZES } from "../constants";
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';


export default function home() {
  const router=useRouter();

  return (
   <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
    <Stack.Screen style={styles.tex}
    options={{
      headerStyle:{backgroundColor:COLORS.lightWhite},headerShadowVisible:false,
    headerLeft:()=>(
      <ScreenHeaderBtn iconurl={icons.menu} dimension="60%"/>
    ),

    headerRight:()=>(
      <ScreenHeaderBtn iconurl={images.profile} dimension="100%"/>
    ),
    headerTitle:""
    
    }}
    />


    <ScrollView showsVerticalScrollIndicator={false}>
      <View
         style={{
          flex:1,
          padding:SIZES.medium
        }}>
          <Welcome/>
          <Popularjobs/>
          <Nearbyjobs/>
          

      </View>

    </ScrollView>
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tex: {
    alignItems: "center",
    justifyContent:"center"
   
  }
});
