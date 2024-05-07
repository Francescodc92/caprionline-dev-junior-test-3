import { useEffect, useState } from 'react';
import Heading from './components/Heading';
import Layout from './Layout';
import MovieList from './components/movie/MovieList';
import { Spinner } from 'flowbite-react';
import FilterMovie from './components/FilterMovie';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = (sortInput) => {
    setLoading(true);

    setMovies([]);
    let url = 'http://localhost:8000/movies';

    if (sortInput && sortInput !== 'Ordina Per Data') {
      url = `${url}?releaseDate=${sortInput}`;
    }

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Layout>
      <Heading />
      <FilterMovie fetchMovies={fetchMovies} />
      {
        loading && movies.length === 0 ? (
          <div className="text-center">
            <Spinner size="xl" />
          </div>
        ) : (
        <MovieList movies={movies} />
        )

      }
    </Layout>
  );
};



export default App;
