import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../interfaces/movieInterface';
import {styles} from '../theme/theme';
import {Dimensions, Text, View} from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const {width, height} = Dimensions.get('window');

const CarouselMain = ({title, movies}: Props) => {
  return (
    <View>
      {title && <Text style={styles.titles}>{title}</Text>}
      <View style={{height: 440}}>
        {movies && (
          <Carousel
            layout={'stack'}
            layoutCardOffset={18}
            data={movies}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} key={item.id} />
            )}
            sliderWidth={width}
            itemWidth={300}
          />
        )}
      </View>
    </View>
  );
};

export default CarouselMain;
