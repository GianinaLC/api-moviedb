import { createContext, useState } from "react";
import { getAllMovies, getDetailMovie } from "../services/fetchApi";

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [detailMovie, setDetailMovie] = useState('')

    const obtainMovies = async () => {
        getAllMovies()
            .then((res) => {
                setMovies(res.results)
            }
            )
    }

    const obtainDetailMovies = async (id) => {
        getDetailMovie(id)
            .then((res) => {
                setDetailMovie(res)
            }
            )
    }


    return (
        <Context.Provider value={{
            movies,
            detailMovie,
            obtainMovies,
            obtainDetailMovies
        }} >
            {children}
        </Context.Provider>
    )
}

export default Context;