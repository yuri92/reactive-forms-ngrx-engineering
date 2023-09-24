import {IUser} from "../../../shared/models/interfaces/person.interface";
import {createFeature, createReducer, on} from "@ngrx/store";
import {loadPeopleSuccess} from "./people.actions";

export const KEY_STORE_PEOPLE = "people";

export interface PeopleState {
    people: IUser[];
}

const initialState: PeopleState = {
    people: []
}

export const peopleFeature = createFeature({
    name: KEY_STORE_PEOPLE,
    reducer : createReducer(
        initialState,
        on(
            loadPeopleSuccess,
            (state, {people}) => ({
                ...state,
                people
            })
        )
    )
})