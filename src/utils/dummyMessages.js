import { v4 as uuidv4 } from 'uuid';

export const dummyMessage = {
    id: uuidv4(),
    user: 'Dummy user',
    message: 'What do you want?',
    date: Date.now()
};