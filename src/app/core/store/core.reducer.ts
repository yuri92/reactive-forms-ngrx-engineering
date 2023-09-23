import {createReducer} from '@ngrx/store';
import {IPerson} from "../../shared/models/interfaces/person.interface";

export interface CoreState {
    user: IPerson;
}

const initialCoreState: CoreState = {
    user: null
}

export const coreReducer = createReducer(
    initialCoreState
)


