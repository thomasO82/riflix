


export default function MovieDetails({ movie }) {
    return (
        <div>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            )
                :
                <p>Affiche indisponible</p>
            }
            <h2>{movie.title}</h2>
            <p>Sortie : {movie.release_date || "Aucune date disponible"}</p>
            <p>{movie.overview} || "Aucun resumé disponible"</p>
        </div>
    )
}
