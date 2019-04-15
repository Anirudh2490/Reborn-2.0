import * as User from '../actionTypes/UserActionTypes';


export const addUser = details => {
    return {
    type: User.ADD_USER,
    details
};
}

export const removeUser = index => {
    return {
        type: User.REMOVE_USER,
        index
    };
};

export const updateUser = (index, details) => {
    return {
        type: User.UPDATE_USER,
        index,
        details
    }
}