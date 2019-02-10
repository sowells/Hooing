import React from 'react'
// const menuDispatch 
export default function(state, action) {
    switch(action.type) {
        case MENU_ACTION_TYPE.CLOSE_MENU: {
            return false;
        }
        case MENU_ACTION_TYPE.OPEN_MENU : {
            return true;
        }
        default:
            return state;
    }
    return state;
}

export const menuDispatch = React.createContext(null);
export const MENU_ACTION_TYPE = {
    CLOSE_MENU:"a",
    OPEN_MENU:"b"
}