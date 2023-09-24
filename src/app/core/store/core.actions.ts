import {createAction, props} from "@ngrx/store";
import {IUser} from "../../shared/models/interfaces/person.interface";

export const login = createAction(
    '[Login page] A user wants to login',
    props<{email: string, password: string}>()
)

export const loginSuccess = createAction(
    '[Core Effect] A user has logged in',
    props<{user: IUser}>()
)