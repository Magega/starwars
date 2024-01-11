import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const CharacterTable = ({ characters }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 1300,
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Skin color</TableCell>
            <TableCell align="right">Hair color</TableCell>
            <TableCell align="right">Eye color</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Mass</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              hover
              component={Link}
              to={`/character/${index + 1}`}
            >
              <TableCell component="th" scope="row">
                {character.name}
              </TableCell>
              <TableCell align="right">{character.height}</TableCell>
              <TableCell align="right">{character.skin_color}</TableCell>
              <TableCell align="right">{character.hair_color}</TableCell>
              <TableCell align="right">{character.eye_color}</TableCell>
              <TableCell align="right">{character.gender}</TableCell>
              <TableCell align="right">{character.mass}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CharacterTable;
