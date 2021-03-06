import { Action, ActionCreator } from "redux";
import { Message } from "../message/message.model";
import { uuid } from "../utils/uuid";
import { Thread } from "./thread.model";

export const ADD_THREAD = '[THREAD] Add'
export interface AddThreadAction extends Action {
    thread: Thread
}
export const addThread: ActionCreator<AddThreadAction> = (thread) => ({
    type: ADD_THREAD,
    thread: thread,
});

export const ADD_MESSAGE = '[THREAD] Add Message'
export interface AddMessageAction extends Action {
    thread: Thread;
    message: Message;
}
export const addMessage: ActionCreator<AddMessageAction> = (thread: Thread, messageArgs: Message) : AddMessageAction => {
    const defaults = {
        id: uuid(),
        sentAt: new Date(),
        isRead: false,
        thread: thread,
    }
    const message : Message = Object.assign({}, defaults, messageArgs);

    return {
        type: ADD_MESSAGE,
        thread: thread,
        message: message,
    }
}

export const SELECT_THREAD = '[Thread] Select';
export interface SelectThreadAction extends Action {
    thread: Thread
}
export const selectThread: ActionCreator<SelectThreadAction> = (thread) => ({
    type: SELECT_THREAD,
    thread: thread,
})
