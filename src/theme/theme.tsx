import {StyleSheet} from 'react-native';
import {height} from '../constants/constants';

export const styles = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  colors: {},
  elevation: {
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  cardContainer: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 6,
  },
  imgContainer: {
    flex: 1,
  },
  img: {
    flex: 1,
    borderRadius: 18,
  },
  titles: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  titleMovieTxt:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieTxtContainer:{
    marginHorizontal:20,
    marginTop: 25,
  },
  imgDetailsContainer: {
    width: '100%',
    height: height * 0.7,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 0,
    overflow: 'hidden',
  },
  imgDetails: {
    flex: 1,
  },

});
