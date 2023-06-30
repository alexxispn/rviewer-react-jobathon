import React from 'react';
import styled from 'styled-components/macro';
import {Movie} from "../../types/Movie";
import useHover from "../../hooks/useHover";

const MovieCard = ({movie}: { movie: Movie }) => {
    const {isHovered, handleMouseLeave, handleMouseEnter} = useHover();

    const maxTitleLength = 16;
    const title = movie.title.length > maxTitleLength ? movie.title.substring(0, maxTitleLength) + "..." : movie.title;

    return (
        <MovieWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MoviePoster src={movie.image} alt={movie.title}/>
            {!isHovered && <MovieTitle>{title}</MovieTitle>}
            {isHovered && <MovieHovered>
                <MovieFullTitle>{movie.title}</MovieFullTitle>
                <MovieYear>{movie.year}</MovieYear>
                <MovieDescription>{movie.description}</MovieDescription>
            </MovieHovered>
            }

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

const MovieHovered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;

`;

const MovieFullTitle = styled.h2`
  font-size: 1rem;
  color: var(--color-white);
  margin-bottom: 0.2rem;
`

const MovieYear = styled.p`
  font-size: 0.8rem;
  color: var(--color-white);
`

const MovieDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-white);
`

export default MovieCard;
