import { View, Text, TouchableOpacity,ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';


const nearbyjobs = () => {
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
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
         data?.map((job)=>(
           <NearbyJobCard
           job={job}
           key={`nearby-job-${job?.job_id}`}
           handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
           />
          
         ))
        )}


      </View>


    </View>
  )
}

export default nearbyjobs