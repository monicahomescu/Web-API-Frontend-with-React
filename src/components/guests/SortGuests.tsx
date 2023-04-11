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
import { Link } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Guest } from "../../models/Guest";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";

export const SortGuests = () => {
    const [loading, setLoading] = useState(false);
    const [guests, setGuests] = useState<Guest[]>([]);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${BACKEND_API_URL}/guests`)
        	.then(response => response.json())
        	.then(data => { 
                const sortedGuests = data.sort((g1: Guest, g2: Guest) => g1.firstName.localeCompare(g2.firstName));
            	setGuests(sortedGuests); 
            	setLoading(false); 
			});
    } , []);

    return (
		<Container>
			<h1>All guests</h1>
			
			{loading && <CircularProgress />}
			{!loading && guests.length === 0 && <p>No guests found</p>}
			{!loading && (
				<IconButton component={Link} sx={{ mr: 3 }} to={`/guests/add`}>
					<Tooltip title="Add a new guest" arrow>
						<AddIcon color="primary" />
					</Tooltip>
				</IconButton>
			)}
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
							</TableRow>
						</TableHead>
						<TableBody>
							{guests.map((guest, index) => (
								<TableRow key={guest.guestID}>
									<TableCell component="th" scope="row">
										{index + 1}
									</TableCell>
									<TableCell component="th" scope="row">
										<Link to={`/guests/${guest.guestID}/details`} title="View guest details">
											{guest.firstName}
										</Link>
									</TableCell>
									<TableCell align="right">{guest.lastName}</TableCell>
									<TableCell align="right">{guest.phoneNumber}</TableCell>
                                    <TableCell align="right">{guest.email}</TableCell>
                                    <TableCell align="right">{guest.age}</TableCell>
									<TableCell align="right">
										<IconButton
											component={Link}
											sx={{ mr: 3 }}
											to={`/guests/${guest.guestID}/details`}>
											<Tooltip title="View guest details" arrow>
												<ReadMoreIcon color="primary" />
											</Tooltip>
										</IconButton>

										<IconButton component={Link} sx={{ mr: 3 }} to={`/guests/${guest.guestID}/edit`}>
											<EditIcon />
										</IconButton>

										<IconButton component={Link} sx={{ mr: 3 }} to={`/guests/${guest.guestID}/delete`}>
											<DeleteForeverIcon sx={{ color: "red" }} />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Container>
	);
};