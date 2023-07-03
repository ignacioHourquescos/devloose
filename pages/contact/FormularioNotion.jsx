import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";

const FormularioNotion = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Contenido:", content);
    console.log("Nombre:", name);
    console.log("Contacto:", contact);
    console.log("Soy:", type);
    console.log("Estadio:", status);

    const notionEndpoint = "https://api.notion.com/v1/pages";
    const notionDatabaseId = "821ee12ae6bc48f2b061d0e3037f32ca"; 

    const requestBody = {
      parent: {
        database_id: notionDatabaseId,
      },
      properties: {
        name: {
          id: "12",
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        profile: {
          select: {
            name: type,
          },
        },
        status: {
          select: {
            name: status,
          },
        },
        mail: {
          rich_text: [
            {
              text: {
                content: contact === "Mail" ? content : "",
              },
            },
          ],
        },
        phone: {
          rich_text: [
            {
              text: {
                content: contact === "Teléfono" ? content : "",
              },
            },
          ],
        },
        message: {
          rich_text: [
            {
              text: {
                content: content,
              },
            },
          ],
        },
      },
    };

    try {
      await axios.post(notionEndpoint, requestBody, {
        headers: {
          Authorization: "secret_8Pg2k41d8mZSieqsIB23zfEYnfsIgI1cfO8pKCRgOXT",
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
      });

      console.log("Los datos se han enviado correctamente a Notion.");
    } catch (error) {
      console.error("Error al enviar los datos a Notion:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Nombre"
        value={name}
        onChange={handleNameChange}
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
        <MenuItem value="Es una necesidad">Es una necesidad</MenuItem>
        <MenuItem value="Ya tengo otros presupuestos">
          Ya tengo otros presupuestos
        </MenuItem>
      </TextField>
      <TextField
        id="content"
        label="Contenido"
        value={content}
        onChange={handleContentChange}
        multiline
        maxRows={6}
        variant="standard"
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default FormularioNotion;
