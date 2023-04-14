import MovieDetail from "./MovieDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailMovie } from "../../services/fetchApi"


const MovieDetailContainer = () => {

    const { id } = useParams()
    const [detailMovie, setDetailMovie] = useState()

    useEffect(() => {
        setLoading(false),
        obtainDetailMovies(id)
        },[id]
    )

    const obtainDetailMovies = (id) => {
        getDetailMovie(id)
            .then((res) => {
                setDetailMovie(res)
                }
            )
    }


    return (
        <div>
            <MovieDetail {...detailMovie} /> 
          
        </div>
    )
}

export default MovieDetailContainer