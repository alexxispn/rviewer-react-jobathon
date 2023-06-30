import {MOVIES_PER_PAGE} from "../../constants";
import {Movie} from "../../types/Movie";
import {getMovies} from "../../api/ApiMovies";

export const movieService = {

    getMoviesBySearch: async (search: string = ""): Promise<Movie[]> => {
        const movies = await getMovies();
        const filteredMovies = movies.filter((movie: Movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
        });
        return filteredMovies;
    },

    showMoviesByPage: async (movies: Movie[], page: number): Promise<Movie[]> => {
        const start = (page - 1) * MOVIES_PER_PAGE;
        const end = start + MOVIES_PER_PAGE;
        return movies.slice(start, end);
    },

    getTotalPages: (totalMovies: number): number => {
        return Math.ceil(totalMovies / MOVIES_PER_PAGE);
    },

    sortMoviesByReleaseYear: (movies: Movie[]): Movie[] => {
        return movies.sort((a: Movie, b: Movie) => {
            return b.year - a.year;
        });
    }
}


