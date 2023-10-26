import {StyleSheet} from 'react-native';
import {height} from '../constants/constants';

export const styles = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
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
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitleMovieTxt:{
    fontSize: 16,
    opacity: 0.7,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  pMovieTxt: {
    fontSize: 16,
  },
  movieTxtContainer:{
    marginHorizontal:20,
    marginTop: 25,
  },
  imgDetailsContainer: {
    width: '100%',
    height: height * 0.75,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    overflow: 'hidden',
  },
  imgDetails: {
    flex: 1,
  },
  iconStyle: {
    width: 10,
  },
  actorCard:{
    flexDirection: 'row',
    padding:8,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 50
  },
  actorInfo:{
   marginHorizontal: 10,
  },
  actorImg:{
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 3,
  },
  actorParagraph: {

  },
  backButton:{
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 5
  },

});
