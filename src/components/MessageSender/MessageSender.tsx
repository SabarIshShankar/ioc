import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {sendMessage} from '../../store/message/action';
import StyledMessageSender from './StyledMessageSender';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {readRecord} from '../../utilities/localStorageService';
import {getTime12Hourse, getTime24hours} from '../../utilities/common';

interface ImessageSenderDispatchProps{
    sendMessage: (message: {
        from: string, 
        content: string,
        time: string
    }) => void;
}

const KEY_CODES = {
    ENTER: 'ENTER',
    CTRL: 'Control'
};

export class MessageSender extends React.Component {
    public state = {
        username: readRecord('username') || '0001',
        chatMessage: ''
    };
    private messagesInputRef = React.createRef<HTMLInputElement>();
    private pressedKeysMap: {} = {};

    public componentDidMount(): void{
        document.addEventListener('keydown', this.handleKeyPress);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    public render(){
        const {chatMessage} = this.state;

        return (
            <StyledMessageSender>
                <input id='send-message-input' type='text' ref={this.messagesInputRef} value={chatMessage} />
                <button id='send-message-btn' onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faPaperPlane} color="white" size="2x"/>
                </button>
            </StyledMessageSender>
        );
    }
    private handleKeyUp = (e: KeyboardEvent) => {
        e = e || event;
        this.pressedKeyMap[e.key] = e.type === 'keydown';

        if(readRecord('ctrlEnterSending') !== 'On'){
            this.sendOnPressEnter();
        } else {
            this.sendOnPressCtrlEnter();
        }
    };

    private sendOnPressEnter = () => {
        if(KEY_CODES.ENTER in this.pressedKeysMap && !(KEY_CODES.CTRL in this.pressedKeysMap)){
            this.sendChatMessage();
            this.cleanMessageInput();
        } else {
            return;
        }
    };

    private sendOnPressCtrlEnter = () => {
        if(KEY_CODES.CTRL in this.pressedKeysMap && KEY_CODES.ENTER in this.pressedKeysMap){
            this.sendChatMessage();
            this.cleanMessageInput();
        } else {
            return;
        }
    };
}