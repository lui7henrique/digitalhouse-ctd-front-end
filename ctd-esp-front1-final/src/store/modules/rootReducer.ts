import { combineReducers as combineReducersRedux } from "redux";
import { characters } from "./characters/reducer";

export const combineReducers = combineReducersRedux({
  characters,
});
