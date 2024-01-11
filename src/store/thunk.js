import axios from "axios";

export const fetchCharacters = () => async (dispatch) => {
  try {
    const response = await axios.get("https://swapi.dev/api/people/");
    dispatch({
      type: "FETCH_CHARACTERS_SUCCESS",
      payload: response.data.results,
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};

export const fetchCharacterById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    dispatch({
      type: "FETCH_CHARACTER_BY_ID_SUCCESS",
      payload: {
        id,
        character: response.data,
      },
    });
  } catch (error) {
    console.error(`Error fetching character with ID ${id}:`, error);
  }
};
