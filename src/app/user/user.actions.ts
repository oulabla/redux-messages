import { Action, ActionCreator } from "redux";
import { User } from "./user.model";

export const SET_CURRENT_USER = '[USER] Set Current'
export interface SetCurrentUserAction extends Action {
    user: User
}

export const setCurrentUser: ActionCreator<SetCurrentUserAction> = 
    (user) => ({
        type: SET_CURRENT_USER,
        user: user
    });