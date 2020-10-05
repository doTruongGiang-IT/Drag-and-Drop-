import {CONSTANTS} from './index';

export const addList = (title) => {
    return {
        type: CONSTANTS.addList,
        payload: title
    }
};