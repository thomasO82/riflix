import axios from "axios"

const movieApi = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    },
    params: {
        language: "fr-FR"
    }
})

export async function getMovie(categorie) {
    const response = await movieApi.get(`/movie/${categorie}`)
    return response.data.results
}