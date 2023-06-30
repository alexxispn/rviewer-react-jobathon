import {fireEvent, render, screen} from '@testing-library/react';
import MoviesPagination from './MoviesPagination';

describe('MoviesPagination', () => {
    it('should render arrow for previous page', () => {
        render(<MoviesPagination currentPage={2} totalPages={3} onPageChange={() => {
        }}/>);
        const previousPage = screen.getByLabelText('Previous page');
        expect(previousPage).toBeInTheDocument();
    });
    it('should render arrow for next page', () => {
        render(<MoviesPagination currentPage={2} totalPages={3} onPageChange={() => {
        }}/>);
        const nextPage = screen.getByLabelText('Next page');
        expect(nextPage).toBeInTheDocument();
    });
    it('should render pagination numbers', () => {
        render(<MoviesPagination currentPage={2} totalPages={3} onPageChange={() => {
        }}/>);
        const paginationNumber = screen.getByText('3');
        expect(paginationNumber).toBeInTheDocument();
    });
    it('should not render pagination numbers if there is only one page', () => {
        render(<MoviesPagination currentPage={0} totalPages={0} onPageChange={() => {
        }}/>);
        const paginationNumber = screen.queryByText('1');
        expect(paginationNumber).not.toBeInTheDocument();
    });
    it('should call onPageChange when clicking on previous page', () => {
        const onPageChange = jest.fn();
        render(<MoviesPagination currentPage={2} totalPages={3} onPageChange={onPageChange}/>);
        const previousPage = screen.getByLabelText('Previous page');
        fireEvent.click(previousPage);
        expect(onPageChange).toHaveBeenCalledTimes(1);
    });
    it('should call onPageChange when clicking on next page', () => {
        const onPageChange = jest.fn();
        render(<MoviesPagination currentPage={2} totalPages={3} onPageChange={onPageChange}/>);
        const nextPage = screen.getByLabelText('Next page');
        fireEvent.click(nextPage);
        expect(onPageChange).toHaveBeenCalledTimes(1);
    });
    it('should call onPageChange when clicking on pagination number', () => {
        const onPageChange = jest.fn();
        render(<MoviesPagination currentPage={2} totalPages={3} onPageChange={onPageChange}/>);
        const paginationNumber = screen.getByText('3');
        fireEvent.click(paginationNumber);
        expect(onPageChange).toHaveBeenCalledTimes(1);
    });
    it('should disable previous page arrow when currentPage is 1', () => {
        render(<MoviesPagination currentPage={1} totalPages={3} onPageChange={() => {
        }}/>);
        const previousPage = screen.getByLabelText('Previous page');
        expect(previousPage).toBeDisabled();
    });
    it('should disable next page arrow when currentPage is equal to totalPages', () => {
        render(<MoviesPagination currentPage={3} totalPages={3} onPageChange={() => {
        }}/>);
        const nextPage = screen.getByLabelText('Next page');
        expect(nextPage).toBeDisabled();
    });
    it('should disable pagination number when currentPage is equal to pagination number', () => {
        render(<MoviesPagination currentPage={3} totalPages={3} onPageChange={() => {
        }}/>);
        const paginationNumber = screen.getByText('3');
        expect(paginationNumber).toBeDisabled();
    });
});
