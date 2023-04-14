import MovieCard from "./MovieCard"

const MovieList = ({ movies }) => {
    return (
        <>
            {
                movies.map(
                    card => <MovieCard key={card.id}{...card} />
                )
            }
        </>
    )
}

export default MovieList