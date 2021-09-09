import * as React from 'react';
import {connect} from 'react-redux';
import StyedChatArea from './StyledChatArea';
import Message from '../Message';
import {scrollToBottom} from '../../utilities/common';
import {IMessage} from '../Message/Message';

interface IChatAreaState{
    messageState: {
        messages: []
    }
}
interface IChatAreaProps{
    messages: []
}

export default class ChatArea extends React.Component{
    private chatAreaRef = React.createRef<HTMLDivElement>();
    public render() {
    const { messages } = this.props as IChatAreaProps;
    return(
        <StyledChatArea ref={this.chatAreaRef}>
            
        </StyledChatArea>
    )
    }
}