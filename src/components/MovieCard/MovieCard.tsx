import React from 'react';
import styled from 'styled-components/macro';
import {Movie} from "../../../types/Movie";

const MovieCard = ({movie}: { movie: Movie }) => {

    const maxTitleLength = 16;
    const title = movie.title.length > maxTitleLength ? movie.title.substring(0, maxTitleLength) + "..." : movie.title;

    return (
        <MovieWrapper>
            <MoviePoster src={movie.image} alt={movie.title}/>
            <MovieTitle>{title}</MovieTitle>
        </MovieWrapper>
    );
}

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
`;

const MovieTitle = styled.h2`
  font-size: 1rem;
  width: 100%;
  color: var(--color-white);
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export default MovieCard;
