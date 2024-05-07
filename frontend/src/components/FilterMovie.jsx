import { useState } from "react";

const FilterMovie = ({fetchMovies}) => {
  const [sortInput, setSortInput] = useState("");

  const handleInputChange = (event) => {
    const selectedValue = event.target.value;
    setSortInput(selectedValue); 
    fetchMovies(selectedValue);
  }

  return ( 
    <div className="mx-auto border-2 border-green-600 my-8 lg:mb-16">
        <select id="releaseDate" value={sortInput == "" ? "Ordina Per Data" : sortInput} onChange={handleInputChange}>
          <option disabled value="Ordina Per Data">Ordina Per Data</option>
          <option value="desc">Recenti</option>
          <option value="asc">Meno Recenti</option>
        </select>
    </div>
  );
}
 
export default FilterMovie;