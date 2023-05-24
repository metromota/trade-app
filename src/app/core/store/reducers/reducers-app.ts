import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app-state';
import {
    changeCountry,
    changeLeague,
    changeTeam,
} from '../actions/actions-app';

const reducerCountry = createReducer(
    initialState,
    on(changeCountry, (state, { country }) => {
        return { ...state, country };
    })
);

const reducerLeague = createReducer(
    initialState,
    on(changeLeague, (state, { league }) => {
        return { ...state, league };
    })
);

const reducerTeam = createReducer(
    initialState,
    on(changeTeam, (state, { team }) => {
        return { ...state, team };
    })
);

export const reducersApp = {
    reducerCountry,
    reducerLeague,
    reducerTeam,
};
