import { useState } from "react"
import Modal from "../Modal/Modal"
import MovieDetails from "../MovieDetails/MovieDetails"




export default function Movie({ movie }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsOpen(true)}>
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                )
                    :
                    <p>Affiche indisponible</p>
                }
                <h3>{movie.title}</h3>
                <p>Note : {movie.vote_average.toFixed(1)}</p>
            </div>
            {
                isOpen && (
                    <Modal>
                        <MovieDetails movie={movie} />
                    </Modal>
                )
            }
        </>
    )


}
