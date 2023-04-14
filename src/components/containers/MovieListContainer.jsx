import { useState, useEffect } from 'react';
import { getAllMovies } from '../../services/fetchApi';
import MovieList from './MovieList';

const MovieListContainer = () => {
    const [movies, setMovies] = useState([]) 
    const [productsPerPage, setProductsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    
    useEffect(() => {
        obtainMovies(),
            setProductsPerPage
    }, [])

    const obtainMovies = () => {
        getAllMovies()
            .then((res) => {
                setMovies(res.results)
                }
            )
    }

    return (
        <div className="max-h-full flex flex-row flex-wrap justify-center items-center p-5 ">
            <MovieList movies={movies}  />
        </div>
    )


}

export default MovieListContainer