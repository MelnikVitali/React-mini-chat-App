import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

import { types } from './types';

import { getStorage, setStorage } from '../utils/storageHelper';
import { storageKeys } from '../constants/storageKeys';
import { dummyMessage } from '../utils/dummyMessage';

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
            setStorage(storageKeys.currentChat, {...state});

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
            const addedChannel = {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description
            };

            setStorage(storageKeys.currentChat, addedChannel);

            return addedChannel;

        case types.REMOVE_CHANNEL:
            setStorage(storageKeys.currentUser, null);
            setStorage(storageKeys.currentChat, null);

            return {...initialState, currentUser: null};

        case types.SEND_MESSAGE:
            const sentMessage = {
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

            setStorage(storageKeys.currentChat, sentMessage);

            return sentMessage;

        case types.SEND_DUMMY_MESSAGE:
            const sentDummyMessage = {
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

            setStorage(storageKeys.currentChat, sentDummyMessage);

            return sentDummyMessage;

        case types.PAGE_CHAT_RELOAD:
            const sessionStorageChatState = getStorage(storageKeys.currentChat);

            return {...sessionStorageChatState};

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
