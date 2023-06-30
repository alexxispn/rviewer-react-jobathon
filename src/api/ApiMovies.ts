const API_URL = `https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json`

import {ApiMovie, ApiMovies, Movie} from "../types/Movie";

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

export const getMovies = async (): Promise<Movie[]> => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return mapMovies(data)
}


