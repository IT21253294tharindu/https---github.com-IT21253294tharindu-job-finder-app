import { React, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobtypes = ["Full-Time", "Part-Time", "Freelance", "Internship"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobsType, setactiveJobsType] = useState('Full-Time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder='what are looking for?'
          />

        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />

        </TouchableOpacity>

      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobtypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobsType, item)}
              onPress={() => {
                setactiveJobsType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobsType, item)}>{item}</Text>
            </TouchableOpacity>

          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>



    </View>

  )
}

export default Welcome