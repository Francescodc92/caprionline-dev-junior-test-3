import { useState } from "react";

const FilterCategory = ({genres ,fetchMovies}) => {

  const [genreInput, setGenreInput] = useState("");
  const handleInputChange = (event) => {
    const selectedValue = event.target.value;
    const nameInput = event.target.id;

    setGenreInput(selectedValue); 
    fetchMovies(nameInput,selectedValue);

  }

  return ( 
    <div className="w-full sm:w-auto">
        
      <select className="w-full sm:w-auto border-1 border-gray-300 text-sm" id="genre" value={genreInput == "" ? "order-by-genre" : genreInput} onChange={handleInputChange}>
        <option disabled value="order-by-genre">Ordina Per Genere</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
        </select>
    </div>
  );
  
}
 
export default FilterCategory;