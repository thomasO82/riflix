import ListMovie from './components/ListMovie/ListMovie'
import './App.css'
import MovieSection from './components/MovieSection/MovieSection'
import { sectionMovieData } from './utils/sectionMovieData'

function App() {

  return (
    <section>
      <h1>Mes Films</h1>
      {sectionMovieData.map((data) => (
        <MovieSection {...data} key={data.category} />

      ))}
    </section>
  )
}

export default App
