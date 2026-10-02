
import ListMovie from "../ListMovie/ListMovie"
import { getMovie } from "../../services/movieApi"
import { useEffect, useState } from "react"

export default function MovieSection({title, category}) {
    const [movies, setMovies]= useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        setLoading(true)
        setError("")
        getMovie(category).then((result)=>{
            setMovies(result)
        })
        .catch(()=>{
            setError("Une erreur est survenue")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[category])

    if (loading) return <p>Chargement</p>
    if(error) return <p>{error}</p>

    return <ListMovie title={title} movies={movies} />
}
