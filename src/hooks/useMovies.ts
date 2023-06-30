import {useCallback, useEffect, useState} from 'react';
import {movieService} from '../services/movies/movieService';
import {Movie} from "../types/Movie";

const useMovies = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResult, setSearchResult] = useState(<{ movies: Movie[], totalPages: number }>{
        movies: [],
        totalPages: 0
    });

    const searchMovies = useCallback(async (searchTerm: string, page: number) => {
        try {
            const searchedMovies = await movieService.getMoviesBySearch(searchTerm);
            const totalPages = movieService.getTotalPages(searchedMovies.length);
            const sortedMovies = movieService.sortMoviesByReleaseYear(searchedMovies);
            const moviesByPage = await movieService.showMoviesByPage(sortedMovies, page);
            setSearchResult({
                movies: moviesByPage,
                totalPages: totalPages,
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }, []);

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    useEffect(() => {
        const fetchMoviesByPage = async () => {
            try {
                await searchMovies(search, currentPage);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMoviesByPage();
    }, [search, currentPage, searchMovies]);

    return {
        search,
        currentPage,
        movies: searchResult.movies,
        totalPages: searchResult.totalPages,
        handlePageChange,
        handleSearchChange,
    };
};

export default useMovies;
