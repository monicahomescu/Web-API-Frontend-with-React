import { Movie } from "./Movie";
import { Ticket } from "./Ticket";

export interface Screening {
    screeningID: number;
    location: string;
    room: number;
    seats: number;
    date: string;
    time: string;
    movieID: number;
    movie: Movie;
    tickets: Ticket[];
}