import React, {useState} from 'react';
import { SearchBoxDiv } from './styles';
const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      onSearch(value); // Llama a la función de búsqueda cuando el usuario escribe
  };

  return (
      <SearchBoxDiv>
          <input
              type="text"
              placeholder="Buscar Película"
              value={searchTerm}
              onChange={handleInputChange}
          />
      </SearchBoxDiv>
  );
};

export default SearchBox;
