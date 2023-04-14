import { useNavigate } from "react-router-dom"

const MovieCard = ({id, poster_path, title }) => {
    const navigate = useNavigate()

    return (
        <>
            <div
                className='w-72 h-1/5 m-2 p-3 flex flex-col items-center rounded hover:opacity-50 hover:cursor-pointer '
                onClick={() => {
                    navigate(`/detail/${id}`)
                }}
            >
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className='w-96 rounded'/>
                <p className="truncate text-base text-a-4 font-roboto my-1">{title}</p>
            </div>
        </>
    )
}

export default MovieCard