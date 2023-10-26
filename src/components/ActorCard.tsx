import React from 'react';
import {Cast} from '../interfaces/castInterface';
import {Text, View, Image} from 'react-native';
import {styles} from '../theme/theme';
import { imageUri } from '../constants/constants';

interface Props {
  actor: Cast;
}

const ActorCard = ({actor}: Props) => {

  const actorImageUri: string = imageUri+`${actor.profile_path}`

  return (
    <View style={[styles.elevation, styles.actorCard]}>
      {actor.profile_path && (
        <Image
          source={{uri: actorImageUri}}
          style={[styles.actorImg, styles.elevation]}
          key={actor.id}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={styles.actorTitle}>{actor.character}</Text>
        <Text style={[styles.actorTitle, {opacity: 0.7}]}>{actor.name}</Text>
      </View>
    </View>
  );
};

export default ActorCard;
