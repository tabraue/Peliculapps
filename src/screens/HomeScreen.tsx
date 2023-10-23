import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { styles } from '../theme/theme'
import Loading from '../components/Loading'

const HomeScreen = () => {

  const {moviesNowPlaying, isLoading} = useMovies()

  if (isLoading) return <Loading/> 

  return (
    <View>
        <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen