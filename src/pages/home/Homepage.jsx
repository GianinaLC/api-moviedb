import { useState } from "react"
import MovieListContainer from "../../components/containers/MovieListContainer"
import Pagination from "../../components/containers/Pagination"

const Homepage = () => {
    
    return (
        <div className="min-h-screen h-full bg-n flex flex-col items-center">
            <MovieListContainer />
            <Pagination
            />
        </div>
    )
}

export default Homepage