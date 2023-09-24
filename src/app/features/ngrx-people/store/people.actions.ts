import {createAction, props} from "@ngrx/store";
import {IUser} from "../../../shared/models/interfaces/person.interface";

export const loadPeople = createAction(
    '[People page] Load people'
)

export const loadPeopleSuccess = createAction(
    '[People Effect] People loaded correctly',
    props<{ people: IUser[] }>()
)