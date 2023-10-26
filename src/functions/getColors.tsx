import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  let dominant, average, lightVibrant;

  const colors = await ImageColors.getColors(uri, {
    fallback: 'powderblue',
    cache: true,
    key: uri,
  });

  if (colors.platform === 'android') {
    dominant = colors.dominant;
    average = colors.average;
    lightVibrant = colors.lightVibrant;

  }
  return {dominant, average, lightVibrant};
};
