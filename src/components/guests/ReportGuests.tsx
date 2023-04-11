import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	CircularProgress,
	Container,
	IconButton,
	Tooltip,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Guest } from "../../models/Guest";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { GuestWithAvgScreeningSeatsDTO } from "../../models/GuestWithAvgScreeningSeatsDTO";

export const ReportGuests = () => {
    const [loading, setLoading] = useState(false);
    const [guests, setGuests] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${BACKEND_API_URL}/guests/get/orderedScreenings`)
        	.then(response => response.json())
        	.then(data => { 
            	setGuests(data); 
            	setLoading(false); 
			});
    } , []);

    return (
		<Container>
			<h1>Filtered guests</h1>
			
			{loading && <CircularProgress />}
			{!loading && guests.length === 0 && <p>No guests found</p>}
			{!loading && guests.length > 0 && (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>#</TableCell>
								<TableCell align="right">FirstName</TableCell>
								<TableCell align="right">LastName</TableCell>
								<TableCell align="right">PhoneNumber</TableCell>
								<TableCell align="right">Email</TableCell>
                                <TableCell align="right">Age</TableCell>
								<TableCell align="right">AvgScreeningSeats</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{guests.map((guest: GuestWithAvgScreeningSeatsDTO, index) => (
								<TableRow key={guest.guestID}>
									<TableCell component="th" scope="row">{index + 1}</TableCell>
									<TableCell align="right">{guest.firstName}</TableCell>
									<TableCell align="right">{guest.lastName}</TableCell>
									<TableCell align="right">{guest.phoneNumber}</TableCell>
                                    <TableCell align="right">{guest.email}</TableCell>
                                    <TableCell align="right">{guest.age}</TableCell>
									<TableCell align="right">{guest.avgScreeningSeats}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Container>
	);
};