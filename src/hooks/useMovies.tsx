import React, {useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBInterface} from '../interfaces/movieInterface';
import {useEffect} from 'react';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}


export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
/*   const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
 */
  const [movieState, setMovieState] = useState<MoviesState>({
    nowPlaying:[],
    popular:[],
    topRated:[],
    upcoming:[],
  })

  const getMovies = async () => {

    const promiseNow = movieDB.get<MovieDBInterface>('/now_playing');
    const promisePopular = movieDB.get<MovieDBInterface>('/popular');
    const promiseTop = movieDB.get<MovieDBInterface>('/top_rated');
    const promiseUpcoming = movieDB.get<MovieDBInterface>('/upcoming');

    const responses = await Promise.all( [promiseNow, promisePopular, promiseTop, promiseUpcoming] )

    setMovieState({
      nowPlaying: responses[0].data.results,
      popular:    responses[1].data.results,
      topRated:   responses[2].data.results,
      upcoming:   responses[3].data.results
    })
    setIsLoading(false);
  };
/* 
  const getPopular = async () => {
    setPopularMovies(resp.data.results);
    setIsLoading(false);
  };

  const getTopRated = async () => {
    setTopRatedMovies(resp.data.results);
    setIsLoading(false);
  };

  const getUpcoming = async () => {
    setUpcomingMovies(resp.data.results);
    setIsLoading(false);
  }; */

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movieState,
    isLoading,
  };
};
