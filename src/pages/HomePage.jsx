import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../store/thunk.js";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import CharacterTable from "../components/CharacterTable.jsx";
import Filters from "../components/Filters.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.listOfCharacters);

  useEffect(() => {
    !characters.length && dispatch(fetchCharacters());
  }, [dispatch]);

  const [filters, setFilters] = useState({
    searchName: "",
    gender: "",
    selectedMovie: "",
    minMass: "",
    maxMass: "",
  });

  const movieNames = Array.from(
    new Set(
      characters.flatMap((character) => character.films.map((film) => film))
    )
  );

  const filteredCharacters = characters.filter((character) => {
    const nameFilter =
      !filters.searchName ||
      character.name.toLowerCase().includes(filters.searchName.toLowerCase());

    const filmsFilter =
      filters.selectedMovie === "" ||
      (filters.selectedMovie !== "" &&
        character.films.includes(filters.selectedMovie));

    const genderFilter =
      !filters.gender ||
      character.gender.toLowerCase() === filters.gender.toLowerCase();

    const minMassFilter =
      !filters.minMass || Number(character.mass) >= Number(filters.minMass);

    const maxMassFilter =
      !filters.maxMass || Number(character.mass) <= Number(filters.maxMass);

    return (
      nameFilter &&
      filmsFilter &&
      genderFilter &&
      minMassFilter &&
      maxMassFilter
    );
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Star Wars Character Explorer
      </Typography>
      <Box>
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>
        <Filters
          filters={filters}
          handleFilterChange={handleFilterChange}
          movieNames={movieNames}
        />
      </Box>
      {characters.length ? (
        <CharacterTable characters={filteredCharacters} />
      ) : (
        <LinearProgress sx={{ width: "100%" }} />
      )}
    </Box>
  );
};

export default HomePage;
