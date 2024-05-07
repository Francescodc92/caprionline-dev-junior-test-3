import React from 'react';
import { Spinner } from 'flowbite-react';
import MovieItem from './MovieItem';
interface MovieListProps {
  isLoading: boolean;
  movies: any[];
}
const MovieList = ({ isLoading , movies} : MovieListProps) => {
  return ( 
    
      isLoading ? (
        <div className="text-center">
          <Spinner size="xl" />
        </div>
      ) : (
        <div className="grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3">
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      )
    
    
  
  );
}
 
export default MovieList;