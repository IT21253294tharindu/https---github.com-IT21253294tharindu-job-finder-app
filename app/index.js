import { useState } from "react";
import {ScrollView,SafeAreaView } from "react-native";
import {Stack,useRouter} from 'expo-router';
import { COLORS,icons,images,SIZES } from "../constants";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}> 
        <Text style={styles.title}>Event GO{'\n'}</Text>
        
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
     color:"red",
     textShadowColor:"black",
     textShadowRadius:0.5,
     opacity:1.5,

    fontSize: 64,
    fontWeight: "bold",
    paddingBottom:30
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
