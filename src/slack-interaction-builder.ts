import { ISlackOriginalMessage, ISlackAttachment, ISlackAction, IOption } from "./types"

export class SlackInteractionBuilder {

    public getAction(text: string, type?: string, id?: string, name?: string, selectedOptions?: IOption[], style?: string, value?: string): ISlackAction {
        const action = {
            id: (id === undefined) ? "" : id,
            name: (name === undefined) ? "" : name,
            selected_options: selectedOptions,
            style: (style === undefined) ? "" : style,
            text: (text === undefined) ? "" : text,
            type: (type === undefined) ? "" : type,
            value: (value === undefined) ? "" : value

        }

        return action
    }

    public getAttachment(text?: string, actions?: ISlackAction[], fallback?: string, callbackID?: string, color?: string, id?: number): ISlackAttachment {
        const attachment: ISlackAttachment = {
            actions: (actions === undefined) ? [] : actions,
            callback_id: (callbackID === undefined) ? "" : callbackID,
            color: (color === undefined) ? "" : color,
            fallback: (fallback === undefined) ? "" : fallback,
            id: (id === undefined) ? 0 : id,
            text: (text === undefined) ? "" : text
        }

        return attachment
    }

    public getMessage(text: string, attachments?: ISlackAttachment[], botID?: string, subtype?: string, ts?: string, type?: string, userName?: string): ISlackOriginalMessage {
        const message: ISlackOriginalMessage = {
            attachments: (attachments === undefined) ? [] : attachments,
            bot_id: (botID === undefined) ? "" : botID,
            subtype: (subtype === undefined) ? "" : subtype,
            text: (text === undefined) ? "" : text,
            ts: (ts === undefined) ? "" : ts,
            type: (type === undefined) ? "" : type,
            username: (userName === undefined) ? "" : userName
        }

        return message
    }
}
