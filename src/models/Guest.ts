import { Ticket } from "./Ticket";

export interface Guest {
    guestID: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    age: number;
    tickets: Ticket[];
}