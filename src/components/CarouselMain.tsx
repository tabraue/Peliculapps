import React, {useEffect, useState} from 'react';
import ImageColors  from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import {Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {imageUri, width} from '../constants/constants';
import {styles} from '../theme/theme';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const CarouselMain = ({title, movies}: Props) => {

  const getPosterColors = async (idx: number) => {
    const movie = movies[idx]
    const movieImageUri: string = imageUri + `${movie.poster_path}`;

    const colors = await ImageColors.getColors(movieImageUri, {
/*         fallback: 'powderblue',
        cache: true,
        key: movieImageUri, */
    });

    console.log(colors)
  }; 

  return (
    <View>
      {title && <Text style={styles.titles}>{title}</Text>}
      <View style={{height: 440}}>
        {movies && (
          <Carousel
            data={movies}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} key={item.id} />
            )}
            
            onSnapToItem={ slideIndex => getPosterColors(slideIndex) }
            layout={'stack'}
            /* layoutCardOffset={18} */
            sliderWidth={width}
            itemWidth={300}
          />
        )}
      </View>
    </View>
  );
};

export default CarouselMain;
