import { useState } from "react";

const FilterMovie = ({fetchMovies}) => {
  const [sortInput, setSortInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");

  const handleInputChange = (event) => {
    const selectedValue = event.target.value;
    const nameInput = event.target.id;

    if(nameInput == "releaseDate"){
      setRatingInput("");
      setSortInput(selectedValue); 
      fetchMovies(nameInput,selectedValue);
    }else if(nameInput == "rating"){
      setSortInput("");
      setRatingInput(selectedValue);
      fetchMovies(nameInput,selectedValue);
    }
  }

  return ( 
  
    <div >
      <select className="border-1 border-gray-300 text-sm" id="releaseDate" value={sortInput == "" ? "ordina-per-data" : sortInput} onChange={handleInputChange}>
        <option disabled value="ordina-per-data">Ordina Per Data</option>
        <option value="desc">Recenti</option>
        <option value="asc">Meno Recenti</option>
      </select>

      <select className="border-1 border-gray-300 text-sm" id="rating" value={ratingInput == "" ? "ordina-per-numero-di-voti" : ratingInput} onChange={handleInputChange}>
        <option disabled value="ordina-per-numero-di-voti" >Ordina Per numero di voti</option>
        <option value="desc">Più votati</option>
        <option value="asc">Meno votati</option>
      </select>
    </div>

  );
}
 
export default FilterMovie;