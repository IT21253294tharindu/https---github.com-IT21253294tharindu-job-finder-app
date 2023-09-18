import { useState, React } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, TurboModuleRegistry } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hooks/useFetch';


const Popularjobs = () => {
  const router = useRouter();
//  const error = false;//error in the line 29 intialze to false 
 // const isLoading = false; //spinner in the 26 line initalize to not visible

  const {data,isLoading,error}=useFetch('search',{
    query:'react developer',
    num_pages:1
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.cardsContainer}>

        {/*show spinner as loading*/}
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>

        ) : error ? (
          //this massage displays when error occured
          <Text>something went wrong!</Text>
        ) : (
          <FlatList 
          data={data}
          renderItem={({item})=>(
            <PopularJobCard item={item}/>
          )}
          keyExtractor={item=>item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
            
            
            
            
            />
        )}


      </View>


    </View>
  )
}

export default Popularjobs