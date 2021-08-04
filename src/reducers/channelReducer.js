import { types } from './types';

const initialState = {
    id: null,
    title: '',
    description: '',
    messages: []
};

const channelReducer = (state, action) => {
    switch (action.type) {
        case types.ADD_CHANNEL:
            return {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description
            };
        case types.REMOVE_CHANNEL:
            return {...initialState};

        case types.SEND_MESSAGE:
            return state.messages.push(action);

        case types.SEND_DUMMY_MESSAGE:
            return state.messages.push(action);

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export { channelReducer, initialState };
