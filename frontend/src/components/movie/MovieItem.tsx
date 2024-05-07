import { Button, Rating} from 'flowbite-react';
import React from 'react';

interface MovieItemProps {
  movie: {  
    id: number;
    title: string;
    year: string;
    rating: number;
    imageUrl: string;
    plot: string;
    wikipediaUrl: string;
  }
}

const MovieItem = ({movie}: MovieItemProps) => {
  return (
    <div className="flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm">
      <div className="grow">
        <img
          className="object-cover w-full h-60 md:h-80"
          src={movie.imageUrl}
          alt={movie.title}
          loading="lazy"
        />
      </div>

      <div className="grow flex flex-col h-full p-3">
        <div className="grow mb-3 last:mb-0">
          {movie.year || movie.rating
            ? <div className="flex justify-between align-middle text-gray-900 text-xs font-medium mb-2">
                <span>{movie.year}</span>

                {movie.rating
                  ? <Rating>
                      <Rating.Star />

                      <span className="ml-0.5">
                        {movie.rating}
                      </span>
                    </Rating>
                  : null
                }
              </div>
            : null
          }

          <h3 className="text-gray-900 text-lg leading-tight font-semibold mb-1">
            {movie.title}
          </h3>

          <p className="text-gray-600 text-sm leading-normal mb-4 last:mb-0">
            {movie.plot.substr(0, 80)}...
          </p>
        </div>

        {movie.wikipediaUrl
          ? <Button
              color="light"
              size="xs"
              className="w-full"
              onClick={() => window.open(movie.wikipediaUrl, '_blank')}
            >
              More
            </Button>
          : null
        }
      </div>
    </div>
  );
}
 
export default MovieItem;