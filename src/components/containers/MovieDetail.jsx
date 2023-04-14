import { useNavigate } from "react-router-dom"

const MovieDetail = ({title, poster_path, overview, release_date,genres,tagline}) => {
    const navigate = useNavigate()
    

//TODO: duración de la pelicula
    
    return (
        <div className="font-montserrat bg-n h-full flex justify-center py-5">
            <div className="text-a-4 w-full p-4 bg-a-2 justify-center md:flex">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className='w-80 rounded m-auto pb-3 md:m-0 md:p-0' />
                <div className="mx-3 flex flex-col px-2 ">
                    <h2 className="text-4xl mb-4 font-bold text-n">{title}</h2>
                    <div className="flex flex-col">
                        {tagline? <h3 className="text-a-4 italic text-lg">{tagline}</h3> : ''}
                        
                        <div className="flex ">
                            {
                            genres?.map(x =>
                                    <p key={x.id} className="pr-1 py-1 font-light text-a-3">{x.name}</p>
                                )
                            }
                        </div>
                            
                    </div>
                    <p className="text-a-1 ">{overview}</p>
                    <p className="my-5">{release_date}</p>

                    <button className="bg-a-1 w-24 p-1 rounded text-sm hover:opacity-80 text-a-2" onClick={() => navigate('/')}>Volver</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail