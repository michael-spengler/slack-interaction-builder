# Slack Interaction Builder
Implement Slack Interactions easily

----
# Usage Example

    import { SlackInteractionBuilder } from "./slack-interaction-builder";  
    import { ISlackOriginalMessage, ISlackAttachment, ISlackAction } 
        from "./types";

    const slackInteractionBuilder: SlackInteractionBuilder = 
        new SlackInteractionBuilder()

----
>Getting a simple Slack Message  

    const message: ISlackOriginalMessage = 
        slackInteractionBuilder.getMessage("Hello World")

----
>Getting a simple Slack Attachment  

    const attachment: ISlackAttachment = 
        slackInteractionBuilder.getAttachment("Hello Attachment")

----
>Getting a simple Slack Action  

    import { SlackInteractionBuilder } from "./slack-interaction-builder";  
    import { ISlackOriginalMessage, ISlackAttachment, ISlackAction } from "./types";
    
    const action: ISlackAction = slackInteractionBuilder.getAction("Hello Action")  

----
>Create a Slack Message with one attachment containing two actions  

    const slackInteractionBuilder: SlackInteractionBuilder = 
        new SlackInteractionBuilder()  

    const actions: ISlackAction[] = []
    actions.push(slackInteractionBuilder.getAction("Hello Action 1"))
    actions.push(slackInteractionBuilder.getAction("Hello Action 2"))  
    
    const attachments: ISlackAttachment[] = []  
    attachments.push(slackInteractionBuilder
        .getAttachment("Hello Attachment", actions))  
    
    const message: ISlackOriginalMessage = 
        slackInteractionBuilder.getMessage("Hello World", attachments)