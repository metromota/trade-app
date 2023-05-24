import { createAction, props } from '@ngrx/store';

const changeCountry = createAction(
    '[APP] Change Country',
    props<{ country: boolean }>()
);
const changeLeague = createAction(
    '[APP] Change League',
    props<{ league: boolean }>()
);
const changeTeam = createAction(
    '[APP] Change Team',
    props<{ team: boolean }>()
);

export { changeCountry, changeLeague, changeTeam };
