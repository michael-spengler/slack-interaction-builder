"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SlackInteractionBuilder = /** @class */ (function () {
    function SlackInteractionBuilder() {
    }
    SlackInteractionBuilder.prototype.getAction = function (text, type, id, name, selectedOptions, style, value) {
        this.action = {
            id: (id === undefined) ? "" : id,
            name: (name === undefined) ? "" : name,
            selected_options: selectedOptions,
            style: (style === undefined) ? "" : style,
            text: (text === undefined) ? "" : text,
            type: (type === undefined) ? "" : type,
            value: (value === undefined) ? "" : value,
        };
        return this.action;
    };
    SlackInteractionBuilder.prototype.getAttachment = function (text, actions, fallback, callbackID, color, id) {
        this.attachment = {
            actions: (actions === undefined) ? [] : actions,
            callback_id: (callbackID === undefined) ? "" : callbackID,
            color: (color === undefined) ? "" : color,
            fallback: (fallback === undefined) ? "" : fallback,
            id: (id === undefined) ? 0 : id,
            text: (text === undefined) ? "" : text,
        };
        return this.attachment;
    };
    SlackInteractionBuilder.prototype.getMessage = function (text, attachments, botID, subtype, ts, type, userName) {
        this.message = {
            attachments: (attachments === undefined) ? [] : attachments,
            bot_id: (botID === undefined) ? "" : botID,
            subtype: (subtype === undefined) ? "" : subtype,
            text: (text === undefined) ? "" : text,
            ts: (ts === undefined) ? "" : ts,
            type: (type === undefined) ? "" : type,
            username: (userName === undefined) ? "" : userName,
        };
        return this.message;
    };
    return SlackInteractionBuilder;
}());
exports.SlackInteractionBuilder = SlackInteractionBuilder;
