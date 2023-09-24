import {createReducer, on} from '@ngrx/store';
import {IUser} from "../../shared/models/interfaces/person.interface";
import {actionLogin} from "./core.actions";

export interface CoreState {
    user: IUser;
}

const initialCoreState: CoreState = {
    user: null
}

export const coreReducer = createReducer(
    initialCoreState,
    on(
        actionLogin,
        (state, {user}) => {
            return {
                ...state,
                user
            }
        }
    )
)


