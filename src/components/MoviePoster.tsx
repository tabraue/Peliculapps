import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {styles} from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {

  const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();  

  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate('DetailScreen', movie) }
      activeOpacity={0.8}
      style={[ styles.cardContainer, {width, height}]}>
      <View style={[styles.imgContainer, styles.elevation]}>
        <Image source={{uri: imageUri}} style={styles.img} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;
