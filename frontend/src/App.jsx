import { useEffect, useState } from 'react';
import Heading from './components/Heading';
import Layout from './Layout';
import MovieList from './components/movie/MovieList';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = () => {
    setLoading(true);

    return fetch('http://localhost:8000/movies')
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
      <MovieList isLoading={loading} movies={movies} />
    </Layout>
  );
};



export default App;
