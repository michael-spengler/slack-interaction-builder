
import { SlackInteractionBuilder } from "./slack-interaction-builder"
import { ISlackAction, ISlackAttachment, ISlackOriginalMessage } from "./types"

test("basic slack message", () => {
    const slackInteractionBuilder: SlackInteractionBuilder = new SlackInteractionBuilder()

    const message: ISlackOriginalMessage = slackInteractionBuilder.getMessage("Hello World")

    expect(message.text)
        .toBe("Hello World")

    expect(message.attachments)
        .toEqual([])
})

test("basic slack attachment", () => {
    const slackInteractionBuilder: SlackInteractionBuilder = new SlackInteractionBuilder()

    const attachment: ISlackAttachment = slackInteractionBuilder.getAttachment("Hello Attachment")
    expect(attachment.text)
        .toBe("Hello Attachment")

    expect(attachment.actions)
        .toEqual([])
})

test("basic slack action", () => {
    const slackInteractionBuilder: SlackInteractionBuilder = new SlackInteractionBuilder()

    const action: ISlackAction = slackInteractionBuilder.getAction("Hello Action")

    expect(action.text)
        .toBe("Hello Action")
})

test("basic message with action and attachment", () => {
    const slackInteractionBuilder: SlackInteractionBuilder = new SlackInteractionBuilder()

    const actions: ISlackAction[] = []
    actions.push(slackInteractionBuilder.getAction("Hello Action 1"))
    actions.push(slackInteractionBuilder.getAction("Hello Action 2"))

    const attachments: ISlackAttachment[] = []
    attachments.push(slackInteractionBuilder.getAttachment("Hello Attachment", actions))
    const message: ISlackOriginalMessage = slackInteractionBuilder.getMessage("Hello World", attachments)

    expect(message.text)
        .toBe("Hello World")

    expect(message.attachments.length)
        .toEqual(1)

    const expectedNumberofActions: number = 2
    expect(message.attachments[0].actions.length)
        .toEqual(expectedNumberofActions)

    expect(message.attachments[0].actions[0].text)
        .toEqual("Hello Action 1")

    expect(message.attachments[0].actions[1].text)
        .toEqual("Hello Action 2")
})
