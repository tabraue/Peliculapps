import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from '../theme/theme'


const Loading = () => {
  return (
    <View style={styles.activity}>
    <ActivityIndicator  size="small" color="#0000ff"/>
  </View>
  )
}

export default Loading