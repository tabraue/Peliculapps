import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {styles} from '../theme/theme';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: ( title ) ? 280 : 300 }}>
      {title && <Text style={styles.titles}>{title}</Text>}
      {movies && (
        <FlatList
          data={movies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, separators}: any) => (
            <TouchableHighlight
              style={[styles.elevation,{height: 50}]}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              activeOpacity={1}>
              <MoviePoster
                movie={item}
                key={item.id}
                width={140}
                height={200}
              />
            </TouchableHighlight>
          )}
        />
      )}
    </View>
  );
};

export default HorizontalSlider;
