import {CONSTANTS} from './index';

export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.addCard,
        payload: {text, listID}
    };
};