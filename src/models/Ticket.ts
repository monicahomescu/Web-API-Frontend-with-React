import { Guest } from "./Guest";
import { Screening } from "./Screening";

export interface Ticket {
    screeningID: number;
    guestID: number;
    price: number;
    numberOf: number;
    screening: Screening;
    guest: Guest;
}