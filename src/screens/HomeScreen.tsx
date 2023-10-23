import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import Loading from '../components/Loading'
import MoviePoster from '../components/MoviePoster'
import { styles } from '../theme/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'



const HomeScreen = () => {
  
  const {moviesNowPlaying, isLoading} = useMovies()
  const {top} = useSafeAreaInsets()

  if (isLoading) return <Loading/> 

  return (
    <View style={{marginTop: top+10}}>
        <MoviePoster movie={moviesNowPlaying[0]}/>
    </View>
  )
}

export default HomeScreen