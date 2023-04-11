import { Screening } from "./Screening";

export interface Movie {
    movieID: number;
    title: string;
    releaseYear: number;
    genre: string;
    producer: string;
    lengthMinutes: number;
    screenings: Screening[];
}