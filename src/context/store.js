import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

import { types } from './types';

import { dummyMessage } from '../utils/dummyMessages';
import { getStorage, setStorage } from '../utils/storageHelper';
import { storageKeys } from '../constants/storageKeys';

const Context = createContext(null);

const useAppContext = () => useContext(Context);

const initialState = {
    id: null,
    title: '',
    description: '',
    currentUser: getStorage(storageKeys.currentUser) || null,
    messages: []
};

const mainReducer = (state, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            setStorage(storageKeys.currentUser, action.currentUser.nickName);

            return {
                ...state,
                currentUser: {
                    id: uuidv4(),
                    nickName: action.currentUser.nickName,
                    email: action.currentUser.email,
                    password: action.currentUser.password
                }
            };

        case types.ADD_CHANNEL:
            return {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description
            };

        case types.REMOVE_CHANNEL:
            setStorage(storageKeys.currentUser, null);

            return {...initialState, currentUser: null};

        case types.SEND_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: uuidv4(),
                        currentUserId: state.currentUser.id,
                        nickName: state.currentUser.nickName,
                        text: action.message,
                        createdTime: DateTime.now().toFormat('HH:mm')
                    }
                ]
            };

        case types.SEND_DUMMY_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: uuidv4(),
                        createdTime: DateTime.now().toFormat('HH:mm'),
                        ...dummyMessage
                    }
                ]
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}} >
            {props.children}
        </Context.Provider >
    );
};

export { ContextProvider, Context, useAppContext };
