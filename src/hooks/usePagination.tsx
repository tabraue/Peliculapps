/* import { useState } from "react";
import { Pagination } from "react-native-snap-carousel";
import { Movie } from "../interfaces/movieInterface";



export const usePagination = (moviesNowPlaying) => {
    //const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([])
    const [activeSlide, setActiveSlide] = useState(0);

    const pagination = 
    (
        <Pagination
            dotsLength={moviesNowPlaying.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotStyle={{
                backgroundColor: '#fafa'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    );


    return{ pagination, activeSlide, setActiveSlide }
};
 */