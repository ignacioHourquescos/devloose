'use client'
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme, ThemeProvider } from "@mui/material/styles";

import Image from "next/image";
import row from "../../public/row.png";
import { Boton, Container, Formulario, Presentacion, Titulo } from "./styles";

export const Mui = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contenido:", content);
    console.log("Nombre:", name);
    console.log("Contacto:", contact);
    console.log("Soy:", type);
    console.log("Estadio:", status);
  };

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Presentacion>
        <div>
          <Container>
            <h1>Cuéntanos de qué se trata el proyecto</h1>
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
                  paddingRight:"4rem"
                },[theme.breakpoints.down("xs")]: {
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
                    defaultValue="Nombre"
                    variant="filled"
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
                    sx={{ fontSize: "20px", color: "#183163", width: "100%" ,
                    [theme.breakpoints.down("sm")]: {
                      marginRight: "50%",
                    },}}
                  >
                    Enviar
                    <Image src={row} alt="arrow" height={35} width={45} />
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
