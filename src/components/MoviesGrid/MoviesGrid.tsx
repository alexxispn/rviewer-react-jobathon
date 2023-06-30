import React from 'react';
import styled from 'styled-components/macro';
import MovieCard from "../MovieCard/MovieCard";
import {Movie} from "../../../types/Movie";

const MoviesGrid = ({movies}: { movies: Movie[] }) => {
    return (
        <Movies>
            {movies.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
        </Movies>
    );
}

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export default MoviesGrid;

