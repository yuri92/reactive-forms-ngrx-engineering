import {createSelector} from "@ngrx/store";
import {CoreState} from "./core.reducer";

export const selectUser = createSelector(
    state => state["core"],
    core => core.user
)