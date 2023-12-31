import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, FlatList} from 'react-native';
import {MovieFullDetails} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/castInterface';
import {styles} from '../theme/theme';
import ActorCard from './ActorCard';

interface Props {
  movieFullDetails: MovieFullDetails;
  cast: Cast[];
}

const MovieDetails = ({movieFullDetails, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <Icon
            name="star"
            size={23}
            color="#c9ac06"
            style={{marginRight: 5}}
          />
          <Text style={styles.pMovieTxt}>
            {movieFullDetails.vote_average} -{' '}
          </Text>
          <Text style={{fontSize: 12}}>
            ({movieFullDetails.vote_count} votes) -{' '}
          </Text>
          <Text style={[styles.pMovieTxt, {textAlign: 'justify'}]}>
            {movieFullDetails.genres &&
              movieFullDetails.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* Sinopsis */}
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.titleMovieTxt}>Synopsis</Text>
          <Text style={[styles.pMovieTxt, {textAlign: 'justify'}]}>
            {movieFullDetails.overview}
          </Text>
        </View>

        {/* Actrices y actores */}
        <View>
          <Text style={styles.titleMovieTxt}>Actors</Text>
          <FlatList
            data={cast}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index, separators}: any) => (
              <ActorCard actor={item} key={index} />
            )}
          />
        </View>
      </View>
    </>
  );
};

export default MovieDetails;
