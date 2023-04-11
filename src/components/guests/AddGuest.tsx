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

export const AddGuest = () => {
	const navigate = useNavigate();

	const [guest, setGuest] = useState({
		"firstName": "",
        "lastName": "",
        "phoneNumber": "",
        "email": "",
        "age": 0
	});

	const addGuest = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post(`${BACKEND_API_URL}/guests/`, guest);
			navigate("/guests");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/guests`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<form onSubmit={addGuest}>
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

						<Button type="submit">Add Guest</Button>
					</form>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Container>
	);
};