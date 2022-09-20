import { combineReducers as combineReducersRedux } from "redux";
import { characters } from "./characters/reducer";
import { favorites } from "./favorites/reducer";

export const combineReducers = combineReducersRedux({
  characters,
  favorites,
});
