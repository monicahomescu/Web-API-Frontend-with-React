import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Guest } from "../../models/Guest";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GuestWithScreeningDTO } from "../../models/GuestWithScreeningDTO";

export const ViewGuest = () => {
	const { guestID } = useParams();
	const [guest, setGuest] = useState<GuestWithScreeningDTO>();

	useEffect(() => {
		const fetchGuest = async () => {
			const response = await fetch(`${BACKEND_API_URL}/guests/${guestID}`);
			const guest = await response.json();
			setGuest(guest);
		};
		fetchGuest();
	}, [guestID]);

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/guests`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<h3>Guest Details</h3>
					<p>FirstName: {guest?.firstName}</p>
                    <p>LastName: {guest?.lastName}</p>
                    <p>PhoneNumber: {guest?.phoneNumber}</p>
                    <p>Email: {guest?.email}</p>
                    <p>Age: {guest?.age}</p>
                    <p>Screenings:</p>
                    <ul>
						{guest?.screenings?.map((screening) => (
                            <li key={screening.screeningID}>{screening.location}</li>
						))}
					</ul>
				</CardContent>
                <CardActions>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/guests/${guestID}/edit`}>
						<EditIcon />
					</IconButton>

					<IconButton component={Link} sx={{ mr: 3 }} to={`/guests/${guestID}/delete`}>
						<DeleteForeverIcon sx={{ color: "red" }} />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);
};