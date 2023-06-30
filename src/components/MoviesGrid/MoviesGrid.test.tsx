import {render, screen} from '@testing-library/react';
import MoviesSearcher from './MoviesSearcher';
import MoviesMock from "../../mocks/movies.mock";

describe('MoviesSearcher', () => {
    it('should render a search input', () => {
        render(<MoviesSearcher/>);
        const searchInput = screen.getByLabelText(/Title/i);
        expect(searchInput).toBeInTheDocument();
    });
    it('should render a title', () => {
        render(<MoviesSearcher/>);
        const title = screen.getByText(/Popular Movies/i);
        expect(title).toBeInTheDocument();
    });
    it('should render a no movies found message when there are no movies', () => {
        render(<MoviesSearcher/>);
        const noMovies = screen.getByText(/No movies found for this search/i);
    });
    it('should render a movie card when there are movies', () => {
        const mockMovies = MoviesMock;
        render(<MoviesSearcher/>);
    });
});
