import {createFeatureSelector, createSelector} from "@ngrx/store";
import {KEY_STORE_PEOPLE, PeopleState} from "./people.reducer";

const state = createFeatureSelector<PeopleState>(KEY_STORE_PEOPLE)

export const getPeople = createSelector(
    state,
    state => state.people
)