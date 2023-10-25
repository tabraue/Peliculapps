import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFullDetails } from '../interfaces/movieInterface';
import { Cast, CastDetails } from '../interfaces/castInterface';



interface MovieDetails {
    isLoading: boolean;
    movieFullDetails?: MovieFullDetails;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) =>{
    //const [isLoading, setIsLoading] = useState(true);
    const [detailsState, setDetailsState] = useState<MovieDetails>({
        isLoading: true,
        movieFullDetails: undefined,
        cast: []
    })

    const getDetails = async () => {
        const promiseMovieDetails = movieDB.get<MovieFullDetails>(`/${movieId}`)
        const promiseCastDetails = movieDB.get<CastDetails>(`/${movieId}/credits`)


        const responses = await Promise.all([ promiseMovieDetails, promiseCastDetails ])

        setDetailsState({
            isLoading: false,
            movieFullDetails: responses[0].data,
            cast: responses[1].data.cast,
        })

    }


    useEffect(() => {
        getDetails()
    }, [])
    
    return {
        ...detailsState
    }
}