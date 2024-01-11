import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";

const CharacterCard = ({ character }) => {
  const [starShips, setStarShips] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);

  const fetchData = async (link, setDataCallback, dataKey) => {
    try {
      const response = await axios.get(link);
      setDataCallback((oldArray) => [...oldArray, response.data[dataKey]]);
    } catch (error) {
      console.error(`Error fetching ${dataKey}:`, error);
    }
  };

  useEffect(() => {
    character.starships.length &&
      character.starships.forEach((element) =>
        fetchData(element, setStarShips, 'name')
      );

    character.films.length &&
      character.films.forEach((element) => fetchData(element, setFilms, 'title'));

    character.species.length &&
      character.species.forEach((element) =>
        fetchData(element, setSpecies, 'name')
      );
  }, []);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Height: {character.height}
          </Typography>
          <Typography variant="h5" component="div">
            Name: {character.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Hair color: {character.hair_color}
          </Typography>
          <Box>
            {starShips.length ? (
              <>
                <Typography>Star ships:</Typography>
                <ul>
                  {starShips.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </>
            ) : (
              <></>
            )}
          </Box>
          <Box>
            {films.length ? (
              <>
                <Typography>Films:</Typography>
                <ul>
                  {films.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </>
            ) : (
              <></>
            )}
          </Box>
          <Box>
            {species.length ? (
              <>
                <Typography>Species:</Typography>
                <ul>
                  {species.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </>
            ) : (
              <></>
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Link to={"/"}>Back</Link>
        </CardActions>
      </Card>
    </>
  );
};

export default CharacterCard;
