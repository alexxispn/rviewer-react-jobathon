import {render, screen} from '@testing-library/react';
import MoviesGrid from './MoviesGrid';
import {MoviesTestMock} from "../../mocks/moviesTest.mock";

describe('MoviesGrid', () => {
    it('should render a no movies found message when there are no movies', () => {
        render(<MoviesGrid movies={[]}/>);
        const noMovies = screen.getByText(/No movies found for this search/i);
        expect(noMovies).toBeInTheDocument();
    });
    it('should render a movie card when there are movies', () => {
        render(<MoviesGrid movies={MoviesTestMock}/>);
    });
});
