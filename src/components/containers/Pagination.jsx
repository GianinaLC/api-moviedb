import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { getAllMovies } from "../../services/fetchApi";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
     const nextPage = () => {
        if ( pokemons.filter( poke => poke.name.includes( search ) ).length > currentPage + 5 )
            setCurrentPage( currentPage + 5 );
    }

    const prevPage = () => {
        if ( currentPage > 0 )
            setCurrentPage( currentPage - 5 );
    }

    const onSearchChange = ({ target }) => {
        setCurrentPage(0);
        setSearch( target.value );
    }
    

        return (
            <div>
                <button 
                className="btn btn-primary"
                onClick={ prevPage }
            >
                Anteriores
            </button>
            &nbsp;
            <button 
                className="btn btn-primary"
                onClick={ nextPage }
            >
                Siguientes
            </button>
            </div>
        );
    }

export default Pagination