import {
    CANCEL_MEMBER_CREATE,
    UPDATE_PLAYER,
    SELECT_MEMBER,
    SELECT_PASSWORD,
    SELECT_PLAYER,
    CANCEL_PLAYER_UPDATE, START_UPDATING_PLAYER
} from "../actions/index";
import _ from 'lodash';

const defaultState = {
    players: {},
    memberToCreate: null,
    password: null,
    playerToUpdate: null
};

export default function (state = defaultState, action) {

    let player;

    switch (action.type) {
        case SELECT_PLAYER:
            player = action.payload;
            const players = updatePlayerSelections({...state.players}, player);

            return {...state, players};

        case START_UPDATING_PLAYER:
            player = action.payload;
            return {...state, playerToUpdate: player};

        case UPDATE_PLAYER:
            return {...state, playerToUpdate: null};

        case CANCEL_PLAYER_UPDATE:
            return {...state, playerToUpdate: null};

        case SELECT_MEMBER:
            const member = action.payload;

            return {...state, memberToCreate: member};

        case SELECT_PASSWORD:
            const password = action.payload;

            return {...state, password};

        case CANCEL_MEMBER_CREATE:
            return {...state, memberToCreate: null};
    }

    return state;
}

function updatePlayerSelections(players, player) {
    if (_.has(players, player._id)) {
        _.unset(players, player._id);
    } else if (_.values(players).length < 2) {
        _.set(players, player._id, player);
    }

    return players;
}
