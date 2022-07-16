import { mealCartReducer } from "./mealCartReducer";
import { createStore } from "redux";

export const store = createStore(mealCartReducer)
