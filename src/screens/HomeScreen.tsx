import React from 'react';
import {ScrollView, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import Loading from '../components/Loading';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import CarouselMain from '../components/CarouselMain';
import GradientBackground from '../components/GradientBackground';

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Películas EN CINES */}
          <CarouselMain title={'En cines'} movies={nowPlaying}/>

          {/* Películas POPULARES */}
          <HorizontalSlider title={'Popular'} movies={popular} />
          <HorizontalSlider title={'Mejor valoradas'} movies={topRated} />
          <HorizontalSlider title={'Próximamente'} movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
