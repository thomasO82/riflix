import Movie from "../Movie/Movie";



export default function ListMovie({title, movies}) {
  return (
    <section>
        <h2>{title}</h2>
        <div>
            {movies.length === 0 && <p>Aucun film trouvé</p>}
            {movies.map((movie)=>(
                <Movie key={movie.id} movie={movie}/>
            ))}
        </div>
    </section>
  )
}
