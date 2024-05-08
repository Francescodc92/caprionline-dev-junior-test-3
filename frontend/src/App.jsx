import { useEffect, useState } from 'react';
import Heading from './components/Heading';
import Layout from './Layout';
import MovieList from './components/movie/MovieList';
import { Spinner } from 'flowbite-react';
import FilterMovie from './components/FilterMovie';
import FilterGenre from './components/FilterGenre';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = (nameInput, sortInput) => {
    setLoading(true);
    
    setMovies([]);
    let url = 'http://localhost:8000/movies';

    if (sortInput && sortInput !== 'Ordina Per Data' && sortInput !== 'Ordina Per numero di voti' && nameInput !== 'genre') {
      url = `${url}?${nameInput}=${sortInput}`;
    }else if(nameInput && sortInput !== 'order-by-genre'){
      url = `http://localhost:8000/genre/${sortInput}/movies`;
    }

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      });
  }

  const fetchGenre = () => {
    return fetch("http://localhost:8000/genre")
      .then(response => response.json())
      .then(data => {
        setGenres(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
    fetchGenre();
  }, []);

  return (
    <Layout>
      <Heading />
      <div className="mx-auto my-8 lg:mb-16 flex flex-col items-center justify-between sm:flex-row ">
        <FilterMovie fetchMovies={fetchMovies} />
        <FilterGenre genres={genres} fetchMovies={fetchMovies}/>
      </div>
      {
        loading && movies.length === 0 ? (
          <div className="text-center">
            <Spinner size="xl" />
          </div>
        ) : (
          <MovieList movies={movies}/>
        )

      }
    </Layout>
  );
};



export default App;
