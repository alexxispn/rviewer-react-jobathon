import moviesMock from "../../mocks/movies.mock";
import {ApiMovie, ApiMovies, Movie} from "../../types/Movie";
import {MOVIES_PER_PAGE} from "../../constants";

export const movieService = {

    getMoviesBySearch: async (search: string = ""): Promise<Movie[]> => {
        const movies = await fetchMovies();
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

const mapMovies = (movies: ApiMovies): Movie[] => {
    return movies.entries.map((movie: ApiMovie) => {
        return {
            title: movie.title,
            description: movie.description,
            image: movie.images.posterArt.url,
            year: movie.releaseYear
        };
    });
};
const fetchMovies = async (): Promise<Movie[]> => {
    const movies = mapMovies(moviesMock);
    return movies;
}


