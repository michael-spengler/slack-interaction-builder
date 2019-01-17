import { IOption, ISlackAction, ISlackAttachment, ISlackOriginalMessage } from "./types";
export declare class SlackInteractionBuilder {
    private action;
    private attachment;
    private message;
    getAction(text?: string, type?: string, id?: string, name?: string, selectedOptions?: IOption[], style?: string, value?: string): ISlackAction;
    getAttachment(text?: string, actions?: ISlackAction[], fallback?: string, callbackID?: string, color?: string, id?: number): ISlackAttachment;
    getMessage(text?: string, attachments?: ISlackAttachment[], botID?: string, subtype?: string, ts?: string, type?: string, userName?: string): ISlackOriginalMessage;
}
