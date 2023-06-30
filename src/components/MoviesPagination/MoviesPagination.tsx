import styled from "styled-components";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {useState} from "react";

const MoviesPagination = ({currentPage, totalPages, onPageChange}) => {
    const [currentP, setCurrentP] = useState(currentPage);

    const renderPaginationNumbers = () => {
        return Array.from(Array(totalPages).keys()).map((page) => (
            <PaginationNumber
                key={page}
                onClick={() => onPageChange(page + 1)}
                disabled={currentPage === page + 1}
            >
                {page + 1}
            </PaginationNumber>
        ));
    };

    return (
        <Pagination>
            <PaginationArrow
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <LeftArrowIcon/>
            </PaginationArrow>
            {renderPaginationNumbers()}
            <PaginationArrow
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <RightArrowIcon/>
            </PaginationArrow>
        </Pagination>
    );
};

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 3rem;
  gap: 1rem;
`;

const PaginationArrow = styled.button`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 0.4rem;

  &:disabled {
    background-color: var(--color-offblack);
    cursor: not-allowed;
  }
`;

const PaginationNumber = styled.button`
  background-color: var(--color-urgent-light);
  color: var(--color-white);
  font-weight: bold;
  border-radius: 100%;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;

  &:disabled {
    background-color: var(--color-urgent);
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--color-urgent);
  }
`;

export default MoviesPagination;
