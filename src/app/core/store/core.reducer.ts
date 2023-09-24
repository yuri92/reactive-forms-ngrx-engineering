import {createReducer, on} from '@ngrx/store';
import {IUser} from "../../shared/models/interfaces/person.interface";
import * as CoreActions from "./core.actions";

export const CORE_STATE_KEY = 'core';

export interface CoreState {
    user: IUser;
}

const initialCoreState: CoreState = {
    user: null
}

export const coreReducer = createReducer(
    initialCoreState,
    on(
        CoreActions.loginSuccess,
        (state, {user}) => ({
            ...state,
            user
        })
    )
)


