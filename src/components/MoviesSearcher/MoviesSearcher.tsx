import {useEffect, useState} from "react";
import SearchInput from "../SearchInput/SearchInput";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import {Movie} from "../../../types/Movie";
import {getMovies, getMoviesBySearchAndPage, getTotalPages,} from "../../../services/movies/movieService";

const MoviesSearcher = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [moviesLoaded, setMoviesLoaded] = useState<boolean>(false);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const fetchedMovies = await getMovies();
            setMovies(fetchedMovies);
            setTotalPages(getTotalPages(fetchedMovies.length));
            setMoviesLoaded(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = event => {
        setSearch(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (moviesLoaded) {
            fetchMoviesBySearchAndPage();
        }
    }, [search, currentPage, moviesLoaded]);

    const fetchMoviesBySearchAndPage = async () => {
        try {
            const searchedMovies = await getMoviesBySearchAndPage(
                movies,
                search,
                currentPage
            );
            setMovies(searchedMovies);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <SearchBackground>
                <Wrapper>
                    <SearchInput label="Search for a movie" value={search} onChange={handleSearchChange}/>
                </Wrapper>
            </SearchBackground>
            <MoviesBackground>
                <Wrapper>
                    <Title>Popular Movies</Title>
                    <MoviesGrid movies={movies}/>
                    <Pagination>
                        <PaginationButton onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}>Previous</PaginationButton>
                        {Array.from(Array(totalPages).keys()).map(p => <PaginationPage key={p} onClick={() => handlePageChange(p + 1)}>{p + 1}</PaginationPage>)}
                        <PaginationButton onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}>Next</PaginationButton>
                    </Pagination>
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  color: var(--color-white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-urgent);
  }

  &:disabled {
    background-color: var(--color-offblack);
    cursor: not-allowed;
  }
`;

const PaginationPage = styled(PaginationButton)`
  background-color: var(--color-urgent);
  color: var(--color-white);
  border: none;
  padding: 0.25rem 1rem;
  border-radius: 100%;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-urgent);
  }

  &:disabled {
    background-color: var(--color-offblack);
    cursor: not-allowed;
  }
`;


export default MoviesSearcher;
