import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterById } from "../store/thunk.js";
import LinearProgress from "@mui/material/LinearProgress";
import CharacterCard from "../components/CharacterCard.jsx";
import { Box } from "@mui/material";

const CharacterPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterById[id] || {});

  useEffect(() => {
    dispatch(fetchCharacterById(id));
  }, [dispatch, id]);

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
      {character.name ? (
        <CharacterCard character={character} />
      ) : (
        <LinearProgress sx={{ width: "100%" }} />
      )}
    </Box>
  );
};

export default CharacterPage;
