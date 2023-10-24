import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {styles} from '../theme/theme';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={[styles.imgDetailsContainer, styles.elevation]}>
        <Image source={{uri: imageUri}} style={[styles.imgDetails]} />
      </View>
      <View style={styles.movieTxtContainer}>
        <Text style={styles.titleMovieTxt}>{movie.original_title}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
