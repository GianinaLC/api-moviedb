import MovieDetail from "./MovieDetail"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailMovie } from "../../services/fetchApi"
import { useAsync } from "../../hooks/useAsync"

const MovieDetailContainer = () => {

    const { id } = useParams()
    const [detailMovie, setDetailMovie] = useState()
    const [loading, setLoading] = useState(true)
    
    useAsync (
        setLoading,
        () => getDetailMovie(id)
            .then(res =>
                setDetailMovie(res)
            ),[id]
    )


    if (loading) {
        return <h1>CARGANDO</h1>
    }

    return (
        <div>
            <MovieDetail {...detailMovie} /> 
          
        </div>
    )
}

export default MovieDetailContainer