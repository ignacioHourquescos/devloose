'use client'
import React from "react";
import Button from "@mui/material/Button";

import { useTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import row from "../../public/row.png";
import { Boton, Container, Presentacion } from "./styles";
import FormularioNotion from "./FormularioNotion";


export const Mui = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Presentacion>
        <div>
          <Container>
            <h1>Cuéntanos de qué se trata el proyecto</h1>
            <FormularioNotion/>
            <Boton>
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
                Enviar
                <Image src={row} alt="arrow" height={35} width={45} />
              </Button>
            </Boton>
          </Container>
        </div>
      </Presentacion>
    </ThemeProvider>
  );
};
