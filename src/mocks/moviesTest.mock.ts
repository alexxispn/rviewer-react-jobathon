import {Movie} from "../types/Movie";

export const AmericanHistoryXMock: Movie = {
    title: "American History X",
    image: "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg",
    year: 1998,
    description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
};

export const CatchMeIfYouCanMock: Movie = {
    title: "Catch Me If You Can",
    image: "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/catch_me_if_you_can.jpg",
    year: 2002,
    description: "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
}

export const ExMachinaMock: Movie = {
    title: "Ex Machina",
    image: "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/ex_machina.jpg",
    year: 2014,
    description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
}

export const MoviesTestMock: Movie[] = [
    AmericanHistoryXMock,
    CatchMeIfYouCanMock,
    ExMachinaMock,
];
