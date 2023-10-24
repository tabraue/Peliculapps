import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/theme';
import {
    FlatList,
    Text,
    TouchableHighlight,
    View,
  } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ({ title, movies } :Props) => {
  return (
    
    <View style={{backgroundColor: 'pink', height: 280}}>
        <Text style={styles.titles}>{title}</Text>
        <FlatList
        data={movies}
        horizontal={true}
        showsHorizontalScrollIndicator={ false }
        renderItem={({item, separators}: any) => (
            <TouchableHighlight
            style={{height: 50}}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            activeOpacity={1}>
            <MoviePoster movie={item} key={item.id} width={140} height={200}/>
            </TouchableHighlight>
        )}
        />
    </View>


  )
}

export default HorizontalSlider