"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var slack_interaction_builder_1 = require("./slack-interaction-builder");
test("basic slack message", function () {
    var slackInteractionBuilder = new slack_interaction_builder_1.SlackInteractionBuilder();
    var message = slackInteractionBuilder.getMessage("Hello World");
    expect(message.text)
        .toBe("Hello World");
    expect(message.attachments)
        .toEqual([]);
});
test("basic slack attachment", function () {
    var slackInteractionBuilder = new slack_interaction_builder_1.SlackInteractionBuilder();
    var attachment = slackInteractionBuilder.getAttachment("Hello Attachment");
    expect(attachment.text)
        .toBe("Hello Attachment");
    expect(attachment.actions)
        .toEqual([]);
});
test("basic slack action", function () {
    var slackInteractionBuilder = new slack_interaction_builder_1.SlackInteractionBuilder();
    var action = slackInteractionBuilder.getAction("Hello Action");
    expect(action.text)
        .toBe("Hello Action");
});
test("basic message with action and attachment", function () {
    var slackInteractionBuilder = new slack_interaction_builder_1.SlackInteractionBuilder();
    var actions = [];
    actions.push(slackInteractionBuilder.getAction("Hello Action 1"));
    actions.push(slackInteractionBuilder.getAction("Hello Action 2"));
    var attachments = [];
    attachments.push(slackInteractionBuilder.getAttachment("Hello Attachment", actions));
    var message = slackInteractionBuilder.getMessage("Hello World", attachments);
    expect(message.text)
        .toBe("Hello World");
    expect(message.attachments.length)
        .toEqual(1);
    var expectedNumberofActions = 2;
    expect(message.attachments[0].actions.length)
        .toEqual(expectedNumberofActions);
    expect(message.attachments[0].actions[0].text)
        .toEqual("Hello Action 1");
    expect(message.attachments[0].actions[1].text)
        .toEqual("Hello Action 2");
});
