import React from 'react';
import {ScrollView, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import Loading from '../components/Loading';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import CarouselMain from '../components/CarouselMain';

const HomeScreen = () => {
  const {moviesNowPlaying, popularMovies, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Películas EN CINES */}
        <CarouselMain title={'En cines'} movies={moviesNowPlaying} />

        {/* Películas POPULARES */}
        <HorizontalSlider title={'Popular'} movies={popularMovies} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
