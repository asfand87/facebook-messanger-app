// forwardref is used in react-flip-move and it tracks how the items are moving.
import React, {forwardRef } from 'react';
import { Typography,CardContent, Card } from '@material-ui/core';
import "./Message.css"

// we are wrapping Message in forward ref so we can track how the items are flipping so then
// we have access to ref which is underneath here...
const Message = forwardRef (({message, username}, ref) => {
    const isUser = username === message.username;
    // can be written as following.
    // <Card className={`message${isUser && 'message__user'}`}>


            // !! so we attach ref underneath.
    return (
        <div ref={ref} className={isUser? "message__user":"message"}>
        <Card className={isUser ? "message__userCard" : "message__guest"}>
            <CardContent>
                <Typography
                    color = "white"
                    variant = "h5"
                    conponent ="h2"  
                >                  
                {!isUser && `${message.username || "Unknkown User"}:`}{message.message}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
});

export default Message
