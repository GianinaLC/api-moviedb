import MovieList from './MovieList';
import { getAllMovies } from '../../services/fetchApi';
import { useState } from 'react';
import { useAsync } from '../../hooks/useAsync';

const MovieListContainer = () => {
    const [ movies, setMovies ] = useState([]) 
    const [ loading, setLoading ] = useState(true)


    useAsync (
        setLoading,
        () => getAllMovies()
            .then(res =>
                setMovies(res.results)
            ),[]
    )

    if (loading) {
        return <h1>CARGANDO</h1>
    }

    return (
        <div className="max-h-full flex flex-row flex-wrap justify-center items-center p-5 ">
            <MovieList movies={movies}  />
        </div>
    )


}

export default MovieListContainer