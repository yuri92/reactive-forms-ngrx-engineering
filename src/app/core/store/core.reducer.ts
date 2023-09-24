import {createReducer, on} from '@ngrx/store';
import {IPerson} from "../../shared/models/interfaces/person.interface";
import {actionLogin} from "./core.actions";

export interface CoreState {
    user: IPerson;
}

const initialCoreState: CoreState = {
    user: null
}

export const coreReducer = createReducer(
    initialCoreState,
    on(
        actionLogin,
        (state) => {
            return {
                ...state,
                user: {
                    firstName: 'Pippo',
                    lastName: 'pluto',
                }
            }
        }
    )
)


