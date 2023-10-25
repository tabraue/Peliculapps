import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {styles} from '../theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useMovieDetails} from '../hooks/useMovieDetails';
import Loading from '../components/Loading';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {cast, isLoading, movieFullDetails} = useMovieDetails(movie.id);

  if (isLoading) return <Loading />;

  return (
    <ScrollView>
      <View style={[styles.imgDetailsContainer, styles.elevation]}>
        <Image source={{uri: imageUri}} style={[styles.imgDetails]} />
      </View>
      <View style={styles.movieTxtContainer}>
        <Text style={styles.titleMovieTxt}>{movie.original_title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color={'grey'} style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFullDetails={movieFullDetails!} cast={cast} />
      )}
    </ScrollView>
  );
};

export default DetailScreen;
