import {movieService} from "./movieService";
import {getMovies} from "../../api/ApiMovies";
import {AmericanHistoryXMock, ExMachinaMock, MoviesTestMock} from "../../mocks/moviesTest.mock";

jest.mock("../../api/ApiMovies");

describe("movieService", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("getMoviesBySearch", () => {
        it("should filter movies by search term", async () => {
            (getMovies as jest.Mock).mockResolvedValue(MoviesTestMock);

            const filteredMovies = await movieService.getMoviesBySearch("history");

            expect(filteredMovies).toEqual([AmericanHistoryXMock]);
        });

        it("should filter movies by search term (case-insensitive)", async () => {
            (getMovies as jest.Mock).mockResolvedValue(MoviesTestMock);

            const filteredMovies = await movieService.getMoviesBySearch("EX");

            expect(filteredMovies).toEqual([ExMachinaMock]);
        });
    });

    describe("getTotalPages", () => {
        it("should calculate the total number of pages", () => {
            const totalMovies = 20;
            const expectedTotalPages = 2;

            const result = movieService.getTotalPages(totalMovies);

            expect(result).toEqual(expectedTotalPages);
        });

        it("should round up the total number of pages", () => {
            const totalMovies = 12;
            const expectedTotalPages = 2;

            const result = movieService.getTotalPages(totalMovies);

            expect(result).toEqual(expectedTotalPages);
        });
    });
});
