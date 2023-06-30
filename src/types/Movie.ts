export interface Movie {
    title: string;
    description: string;
    image: string;
    year: number;
}
export interface ApiMovies {
    total: number;
    entries: ApiMovie[];
}

export interface ApiMovie {
    title:       string;
    description: string;
    images:      Images;
    releaseYear: number;
}

export interface Images {
    posterArt: PosterArt;
}

export interface PosterArt {
    url:    string;
    width:  number;
    height: number;
}
