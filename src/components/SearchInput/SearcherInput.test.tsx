import {render, screen} from '@testing-library/react';
import SearchInput from "./SearchInput";

describe('SearchInput', () => {
    it('should render a search input', () => {
        render(<SearchInput label="Title" value="" onChange={() => {
        }}/>);
        const searchInput = screen.getByLabelText(/Title/i);
        expect(searchInput).toBeInTheDocument();
    });
    it('should render a search input with a placeholder', () => {
        render(<SearchInput label="Title" value="" onChange={() => {
        }}/>);
        const searchInput = screen.getByPlaceholderText(/Title/i);
        expect(searchInput).toBeInTheDocument();
    });
    it('should render a search input with a value', () => {
        render(<SearchInput label="Title" value="test" onChange={() => {
        }}/>);
        const searchInput = screen.getByDisplayValue(/test/i);
        expect(searchInput).toBeInTheDocument();
    });
});
