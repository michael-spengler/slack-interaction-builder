export interface ISlackOriginalMessage {
    text: string;
    username: string;
    bot_id: string;
    attachments: ISlackAttachment[];
    type: string;
    subtype: string;
    ts: string;
    thread_ts?: string;
}
export interface ISlackAttachment {
    callback_id: string;
    fallback: string;
    text: string;
    id: number;
    color: string;
    actions: ISlackAction[];
    pretext?: string;
    author_name?: string;
    author_link?: string;
    author_icon?: string;
    title?: string;
    title_link?: string;
    fields?: ISlackAttachmentField[];
    image_url?: string;
    thumb_url?: string;
    footer?: string;
    footer_icon?: string;
    ts?: number;
    attachment_type?: string;
}
export interface ISlackAction {
    id: string;
    name: string;
    text: string;
    type: string;
    value: string;
    style: string;
    selected_options?: IOption[];
    options?: IOption[];
    confirm?: IConfirm;
    option_groups?: IOptionGroup[];
    data_source?: string;
    min_query_length?: number;
    url?: string;
}
export interface IOption {
    value: string;
    text: string;
    description?: string;
}
export interface IOptionGroup {
    text: string;
    options: IOption[];
}
export interface IConfirm {
    title?: string;
    text: string;
    ok_text?: string;
    dismiss_text?: string;
}
export interface ISlackAttachmentField {
    title: string;
    value: string;
    short: boolean;
}
