import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CORE_STATE_KEY, CoreState} from "./core.reducer";

const state = createFeatureSelector<CoreState>(CORE_STATE_KEY);

export const selectUser = createSelector(
    state,
    core => core.user
)

export const isLoggedIn = createSelector(
    selectUser,
    user => !!user
)