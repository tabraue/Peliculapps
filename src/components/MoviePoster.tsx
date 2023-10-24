import React from 'react'
import { Image, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { styles } from '../theme/theme';

interface Props{
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View style={[styles.elevation, {width, height, marginHorizontal:5}]}>
        <View  style={styles.imgContainer}>
            <Image source={{uri: imageUri}} style={styles.img}/>
        </View>
    </View>
  )
}

export default MoviePoster