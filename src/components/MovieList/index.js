import axios from 'axios'
import React, {Fragment, useState, useEffect} from 'react';
import { MoviesList, ItemMovie, Title } from "./styles"
import SearchBox from '../SearchBox/Searchbox';
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMoviesList, setFilteredMovieList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{
        
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b1eaba4f2909318a5cc9b740be676bf1');
                setMovies(response.data.results);
                setFilteredMovieList(response.data.results)
            } catch (error) {
                setError(error);
            }
        }

        fetchMovies();
    }, []);

    const handleSearch = (searchTerm) => {
        const filteredList = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovieList(filteredList);
    };
    return(
        <Fragment>
            <Title>Películas</Title>
            <SearchBox onSearch={handleSearch}/>
            <MoviesList>
                {filteredMoviesList.map((movie) => {
                    const {title, id, vote_average, poster_path} = movie;

                    return(
                        <ItemMovie>
                            <img alt={`${title} poster image`} src={`https://image.tmdb.org/t/p/original${poster_path}`} className='poster-img'/>
                            <h3>{title}</h3>
                            <p>{vote_average}</p>
                        </ItemMovie>
                    );
                    })};
            </MoviesList>

        </Fragment>
      );
};

export default MovieList;