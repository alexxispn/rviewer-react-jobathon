import React from 'react';
import styled from 'styled-components/macro';
import MovieCard from "../MovieCard/MovieCard";
import {Movie} from "../../types/Movie";

const MoviesGrid = ({movies}: { movies: Movie[] }) => {
    const moviesFound = movies.length > 0;

    return (
        moviesFound
            ? <MoviesFound movies={movies}/>
            : <NoMoviesFound/>
    );
}

const MoviesFound = ({movies}: { movies: Movie[] }) => {
    return (
        <Movies>
            {movies.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
        </Movies>
    );
}

const NoMoviesFound = () => {
    return (
        <NoMovies>
            No movies found for this search
        </NoMovies>
    );
}

const NoMovies = styled.div`
  color: var(--color-white);
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  margin-bottom: 1rem;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export default MoviesGrid;

