import {
	Autocomplete,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton,
	TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Guest } from "../../models/Guest";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

export const UpdateGuest = () => {
    const { guestID } = useParams<{ guestID: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

	const [guest, setGuest] = useState<Guest>({
        guestID: parseInt(String(guestID)),
		firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        age: 0,
        tickets: []
	});

	useEffect(() => {
		const fetchGuest = async () => {
			const response = await fetch(`${BACKEND_API_URL}/guests/${guestID}`);
			const guest = await response.json();
			setGuest(guest);
		};
		fetchGuest();
	}, [guestID]);

	const handleUpdate = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		await axios.put(`${BACKEND_API_URL}/guests/${guestID}`, guest);
		navigate("/guests");
	};

	const handleCancel = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		navigate("/guests");
	};

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/guests`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<form onSubmit={handleUpdate}>
						<TextField
							id="firstName"
                            label="FirstName"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setGuest({ ...guest, firstName: event.target.value })}
						/>
						<TextField
							id="lastName"
							label="LastName"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setGuest({ ...guest, lastName: event.target.value })}
						/>
                        <TextField
							id="phoneNumber"
                            label="PhoneNumber"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setGuest({ ...guest, phoneNumber: event.target.value })}
						/>
                        <TextField
							id="email"
                            label="Email"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setGuest({ ...guest, email: event.target.value })}
						/>
                        <TextField
							id="age"
                            label="Age"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setGuest({ ...guest, age: parseInt(event.target.value) })}
						/>
					</form>
				</CardContent>
				<CardActions>
                <CardActions sx={{ justifyContent: "center" }}>
					<Button type="submit" onClick={handleUpdate} variant="contained">Update</Button>
					<Button onClick={handleCancel} variant="contained">Cancel</Button>
				</CardActions>
                </CardActions>
			</Card>
		</Container>
	);
};