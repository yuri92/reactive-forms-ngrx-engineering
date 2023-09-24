import {createAction, props} from "@ngrx/store";
import {IUser} from "../../shared/models/interfaces/person.interface";

export const actionLogin = createAction(
    '[Login page] A user has logged in',
    props<{user: IUser}>()
)