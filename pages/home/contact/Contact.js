import React, { useState } from "react";
import styled from "styled-components";
import { Styled } from "./styles.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";

const Contact = ({ toggleUniverse }) => {
	const [formData, setFormData] = useState({
		nombre: "",
		telefono: "",
		email: "",
		necesito: "",
	});

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// Perform POST request to the API with formData
		// Replace this with actual API call
		console.log("Form data submitted:", formData);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<Styled.Inner>
			<Styled.LeftColumn>
				<Styled.Title>CONTACTO</Styled.Title>
				<Styled.Punch>Queremos saber más de ti</Styled.Punch>
				<Styled.Telephone>1165106333</Styled.Telephone>
				<Styled.Mail>hi@propulz.co</Styled.Mail>
			</Styled.LeftColumn>
			<Styled.RightColumn>
				<form onSubmit={handleFormSubmit}>
					<FormControl fullWidth>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									label="Nombre"
									variant="outlined"
									fullWidth
									name="nombre"
									value={formData.nombre}
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									label="Teléfono"
									variant="outlined"
									fullWidth
									name="telefono"
									value={formData.telefono}
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									label="Contacto"
									variant="outlined"
									fullWidth
									name="email"
									value={formData.email}
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									label="Necesito"
									variant="outlined"
									fullWidth
									name="necesito"
									value={formData.necesito}
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
									onClick={toggleUniverse}
								>
									Enviar
								</Button>
							</Grid>
						</Grid>
					</FormControl>
				</form>
			</Styled.RightColumn>
		</Styled.Inner>
	);
};

export default Contact;
