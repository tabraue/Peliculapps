import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import Loading from '../components/Loading';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/theme';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const {moviesNowPlaying, popularMovies, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  return (
    <ScrollView>
    <View style={{marginTop: top + 20}}>

      {/* Películas EN CINES */}
      <Text style={styles.titles}>En cines</Text>
      <View style={{height: 440}}>
        <Carousel
          layout={'stack'}
          layoutCardOffset={18}
          data={moviesNowPlaying}
          renderItem={({item }: any) => (
            <MoviePoster movie={item} key={item.id} />
          )}
          sliderWidth={width}
          itemWidth={300}
        />
      </View>

      {/* Películas POPULARES */}

      <View style={{backgroundColor: 'pink', height: 280}}>
        <Text style={styles.titles}>Populares</Text>
        <FlatList
          data={popularMovies}
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
      
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
