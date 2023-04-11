import { Screening } from "./Screening";

export interface GuestWithScreeningDTO {
    guestID: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    age: number;
    screenings: Screening[];
}