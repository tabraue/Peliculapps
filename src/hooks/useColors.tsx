import React, {useEffect} from 'react';
import { imageUri } from "../constants/constants";
import { GradientContext } from "../context/GradientContext";
import { getImageColors } from "../functions/getColors";
import { useContext } from 'react';
import { Movie } from '../interfaces/movieInterface';


export const useColors = (movies: Movie[]) => {
    const {setCurrentColors} = useContext(GradientContext);


    const getPosterColors = async (idx: number) => {
      const movie = movies[idx];
      const movieImageUri: string = imageUri + `${movie.poster_path}`;
  
      const {
        dominant = 'powderblue',
        average = 'powderblue',
        lightVibrant = 'powderblue',
      } = await getImageColors(movieImageUri);
  
      setCurrentColors({dominant, average, lightVibrant});
    };
  
    useEffect(() => {
      if (movies.length > 0) getPosterColors(0);
    }, [movies]);
  

    return {
        getPosterColors
    }
}