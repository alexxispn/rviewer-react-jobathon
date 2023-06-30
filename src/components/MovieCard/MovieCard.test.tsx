import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import MovieCard from "./MovieCard";
import {AmericanHistoryXMock, ExMachinaMock} from "../../mocks/moviesTest.mock";

describe('MovieCard', () => {
    it('should render a full title when title is less than 16 characters', () => {
        render(<MovieCard movie={ExMachinaMock}/>);
        const title = screen.getByText(/Ex Machina/i);
        expect(title).toBeInTheDocument();
    });
    it('should render a short title when title is more than 16 characters', () => {
        render(<MovieCard movie={AmericanHistoryXMock}/>);
        const title = screen.getByText(/American History.../i);
        expect(title).toBeInTheDocument();
    });
    it('should render full title when hovered', async () => {
        render(<MovieCard movie={AmericanHistoryXMock}/>);
        const americanHistoryX = screen.getByAltText(/American History X/i);
        fireEvent.mouseEnter(americanHistoryX);
        await waitFor(() => {
            const title = screen.getByText(/American History X/i);
            expect(title).toBeInTheDocument();
        });
    });
    it('should render a movie poster', () => {
        render(<MovieCard movie={ExMachinaMock}/>);
        const poster = screen.getByAltText(/Ex Machina/i);
        expect(poster).toBeInTheDocument();
    });
    it('should not render a movie description when not hovered', async () => {
        render(<MovieCard movie={ExMachinaMock}/>);
        const exMachina = screen.getByAltText(/Ex Machina/i);
        fireEvent.mouseLeave(exMachina);
        await waitFor(() => {
            const description = screen.queryByText(/A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I./i);
            expect(description).not.toBeInTheDocument();
        });
    });
    it('should render a movie description when hovered', async () => {
        render(<MovieCard movie={ExMachinaMock}/>);
        const exMachina = screen.getByAltText(/Ex Machina/i);
        fireEvent.mouseEnter(exMachina);
        await waitFor(() => {
            const description = screen.getByText(/A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I./i);
            expect(description).toBeInTheDocument();
        });
    });
    it('should not render a movie year when not hovered', async () => {
        render(<MovieCard movie={ExMachinaMock}/>);
        const exMachina = screen.getByAltText(/Ex Machina/i);
        fireEvent.mouseLeave(exMachina);
        await waitFor(() => {
            const year = screen.queryByText(/2014/i);
            expect(year).not.toBeInTheDocument();
        });
    });
    it('should render a movie year when hovered', async () => {
        render(<MovieCard movie={ExMachinaMock}/>);
        const exMachina = screen.getByAltText(/Ex Machina/i);
        fireEvent.mouseEnter(exMachina);
        await waitFor(() => {
            const year = screen.getByText(/2014/i);
            expect(year).toBeInTheDocument();
        });
    });
});
