import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

const DetailScreen = ({ navigation, route }: Props) => {
  
  const movie = route.params;

  return (
    <View>
        <Text>{movie.original_title}</Text>
    </View>
  )
}

export default DetailScreen