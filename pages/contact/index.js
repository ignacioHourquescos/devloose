import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Boton, Container, Formulario, Presentacion } from "./styles";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { Client } from "@notionhq/client";

// import row from "../../../public/row.png";
// import Image from "next/image";

const database_id = "821ee12ae6bc48f2b061d0e3037f32ca";
const Mui = () => {
	const [content, setContent] = useState("");
	const [name2, setName2] = useState("");
	const [contact, setContact] = useState("");
	const [type, setType] = useState("");
	const [status, setStatus] = useState("");

	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	const handleNameChange = (event) => {
		setName2(event.target.value);
	};

	const handleContactChange = (event) => {
		setContact(event.target.value);
	};

	const handleTypeChange = (event) => {
		setType(event.target.value);
	};

	const handleStatusChange = (event) => {
		setStatus(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(process.env.NEXT_PUBLIC_API_URL + database_id, {
			method: "POST",
			body: JSON.stringify({
				name: name2,
			}),
			headers: { "Content-Type": "application/json" },
		});
	};

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	try {
	// 		const response = await notion.pages.create({
	// 			parent: {
	// 				database_id: "821ee12ae6bc48f2b061d0e3037f32ca",
	// 			},
	// 			properties: {
	// 				name: {
	// 					id: "12",
	// 					title: [
	// 						{
	// 							text: {
	// 								content: "Facu",
	// 							},
	// 						},
	// 					],
	// 				},
	// 				profile: {
	// 					select: {
	// 						name: "Emprendedor",
	// 					},
	// 				},
	// 				status: {
	// 					select: {
	// 						name: "ideation",
	// 					},
	// 				},
	// 				mail: {
	// 					rich_text: [
	// 						{
	// 							text: {
	// 								content: "Jorge Diaz",
	// 							},
	// 						},
	// 					],
	// 				},
	// 				phone: {
	// 					rich_text: [
	// 						{
	// 							text: {
	// 								content: "",
	// 							},
	// 						},
	// 					],
	// 				},
	// 				message: {
	// 					rich_text: [
	// 						{
	// 							text: {
	// 								content:
	// 									"Trabajo en la industria vitivinicola. estmos intentando mejorar los procesos para poder obenter un mejor rendimiento. tenemos que hacer una integracion del sistema actual",
	// 							},
	// 						},
	// 					],
	// 				},
	// 			},
	// 		});

	// 		console.log(response);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	const theme = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<Presentacion>
				<div>
					<Container>
						<h1>*Cuéntanos de qué se trata el proyecto</h1>
						<TextField
							id="standard-helperText"
							variant="standard"
							multiline
							maxRows={6}
							value={content}
							onChange={handleContentChange}
							sx={{
								width: "588px",
								height: "240px",
								marginLeft: "2px",
								marginTop: "2rem",
								width: "100%",
							}}
						/>

						<Box
							component="form"
							onSubmit={handleSubmit}
							sx={{
								"& .MuiTextField-root": {
									m: 1,
									width: "25ch",
								},
								[theme.breakpoints.down("sm")]: {
									marginLeft: "15%",
									paddingRight: "4rem",
								},
								[theme.breakpoints.down("xs")]: {
									background: "blue",
								},
							}}
							noValidate
							autoComplete="off"
						>
							<Formulario>
								<div>
									<TextField
										hiddenLabel
										id="filled-hidden-label-normal"
										variant="filled"
										value={name2}
										onChange={handleNameChange}
									/>

									{contact ? (
										<TextField
											id="contact"
											label={contact === "Mail" ? "Email" : "Teléfono"}
											variant="standard"
											value={contact}
											onChange={handleContactChange}
										/>
									) : (
										<TextField
											id="contact-select"
											select
											label="Contacto"
											value={contact}
											onChange={handleContactChange}
											variant="filled"
										>
											<MenuItem value="Mail">Mail</MenuItem>
											<MenuItem value="Teléfono">Teléfono</MenuItem>
										</TextField>
									)}
								</div>

								<div>
									<TextField
										id="type-select"
										select
										label="Soy"
										value={type}
										onChange={handleTypeChange}
										variant="filled"
									>
										<MenuItem value="Empleado / dueño de PYME">
											Empleado / dueño de PYME
										</MenuItem>
										<MenuItem value="Corporativo">Corporativo</MenuItem>
										<MenuItem value="Emprendedor">Emprendedor</MenuItem>
									</TextField>

									<TextField
										id="status-select"
										select
										label="Estadio"
										value={status}
										onChange={handleStatusChange}
										variant="filled"
									>
										<MenuItem value="Es una idea">Es una idea</MenuItem>
										<MenuItem value="Es una necesidad">
											Es una necesidad
										</MenuItem>
										<MenuItem value="Ya tengo otros presupuestos">
											Ya tengo otros presupuestos
										</MenuItem>
									</TextField>
								</div>
							</Formulario>

							<Boton>
								<Stack spacing={2} direction="row">
									<Button
										type="submit"
										variant="text"
										sx={{
											fontSize: "20px",
											color: "#183163",
											width: "100%",
											[theme.breakpoints.down("sm")]: {
												marginRight: "50%",
											},
										}}
									>
										EnviarRRRR
										{/* <Image src={row} alt="arrow" height={35} width={45} /> */}
									</Button>
								</Stack>
							</Boton>
						</Box>
					</Container>
				</div>
			</Presentacion>
		</ThemeProvider>
	);
};

export default Mui;