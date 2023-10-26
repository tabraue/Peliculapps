import React, {useContext, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import { Text, View } from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {imageUri, width} from '../constants/constants';
import {styles} from '../theme/theme';
import MoviePoster from './MoviePoster';
import {getImageColors} from '../functions/getColors';
import {GradientContext} from '../context/GradientContext';


interface Props {
  title?: string;
  movies: Movie[];
}

const CarouselMain = ({title, movies}: Props) => {
  const {setCurrentColors} = useContext(GradientContext);


  const getPosterColors = async (idx: number) => {
    const movie = movies[idx];
    const movieImageUri: string = imageUri + `${movie.poster_path}`;

    const {
      dominant = 'powderblue',
      average = 'powderblue',
      lightVibrant = 'powderblue',
    } = await getImageColors(movieImageUri);

    setCurrentColors({dominant, average, lightVibrant});
  };

  useEffect(() => {
    if (movies.length > 0) getPosterColors(0);
  }, [movies]);

  return (
    <View>
      {title && <Text style={styles.titles}>{title}</Text>}
      <View style={{height: 440}}>
        {movies && (
          <Carousel
            data={movies}
            renderItem={({item}: any) => (
              <MoviePoster
                movie={item}
                key={item.id}
              />
            )}
            onSnapToItem={slideIndex => getPosterColors(slideIndex)}
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
