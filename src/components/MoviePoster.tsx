import React from 'react'
import { Image, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { styles } from '../theme/theme';

interface Props{
    movie: Movie;
}

const MoviePoster = ({ movie }: Props) => {

    const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View style={styles.cardContainer}>
        <View  style={styles.imgContainer}>
            <Image source={{uri: imageUri}} style={styles.card}/>
        </View>
    </View>
  )
}

export default MoviePoster