import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
  listOfCharacters: [],
  characterById: {},
};

const listOfCharactersReducer = (state = initialState.listOfCharacters, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

const characterByIdReducer = (state = initialState.characterById, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTER_BY_ID_SUCCESS':
      return {
        ...state,
        [action.payload.id]: action.payload.character,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  listOfCharacters: listOfCharactersReducer,
  characterById: characterByIdReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
