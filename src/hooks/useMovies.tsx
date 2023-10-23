import React, {useState} from 'react'
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';
import { useEffect } from 'react';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setMoviesNowPlaying(resp.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

  return {
    moviesNowPlaying,
    isLoading
  };
};
