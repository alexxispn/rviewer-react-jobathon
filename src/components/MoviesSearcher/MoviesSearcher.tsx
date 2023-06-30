import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import MoviesPagination from "../MoviesPagination/MoviesPagination";
import useMovies from "../../hooks/useMovies";
import SeachInput from "../SearchInput/SearchInput";
import React from "react";

const MoviesSearcher = () => {
    const {search, handleSearchChange, currentPage, movies, totalPages, handlePageChange} = useMovies();

    return (
        <>
            <SearchBackground>
                <Wrapper>
                    <SeachInput label="Title" value={search} onChange={handleSearchChange}/>
                </Wrapper>
            </SearchBackground>
            <MoviesBackground>
                <Wrapper>
                    <Title>Popular Movies</Title>
                    <MoviesGrid movies={movies}/>
                    <MoviesPagination currentPage={currentPage} totalPages={totalPages}
                                      onPageChange={handlePageChange}/>
                </Wrapper>
            </MoviesBackground>
        </>
    );
}

const SearchBackground = styled.div`
  background-color: var(--color-urgent);
  padding: 1rem 0;
`;

const MoviesBackground = styled.div`
  background-color: var(--color-offblack);
  padding: 1rem 0;
`;

const Wrapper = styled(MaxWidthWrapper)``;

const Title = styled.h1`
  color: var(--color-white);
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  margin-bottom: 1rem;
`;

export default MoviesSearcher;
