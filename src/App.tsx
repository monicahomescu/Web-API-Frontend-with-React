import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHome } from "./components/AppHome";
import { AppMenu } from "./components/AppMenu";
import { GetGuests } from "./components/guests/GetGuests";
import { ViewGuest } from "./components/guests/ViewGuest";
import { DeleteGuest } from "./components/guests/DeleteGuest";
import { AddGuest } from "./components/guests/AddGuest";
import { UpdateGuest } from "./components/guests/UpdateGuest";
import { ReportGuests } from "./components/guests/ReportGuests";
import { SortGuests } from "./components/guests/SortGuests";

function App() {
	return (
		<React.Fragment>
			<Router>
				<AppMenu />

				<Routes>
					<Route path="/" element={<AppHome />} />
					<Route path="/guests" element={<GetGuests />} />
					<Route path="/guests/:guestID/details" element={<ViewGuest />} />
					<Route path="/guests/:guestID/edit" element={<UpdateGuest />} />
					<Route path="/guests/:guestID/delete" element={<DeleteGuest />} />
					<Route path="/guests/add" element={<AddGuest />} /> 
					<Route path="/guests/report" element={<ReportGuests />} />
					<Route path="/guests/sort" element={<SortGuests />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;