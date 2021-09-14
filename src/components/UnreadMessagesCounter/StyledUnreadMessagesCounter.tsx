import styled from '../../theme';

const StyledUnreadMessagesCounter = styled("div")`
width: 21px;
height: 21px;
border-radius: 50%;
background: red;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
float: right;
position: relative;
right: 22%;
margin-top: -11px;

@media only screen
and (min-device-width: 414px)
and (max-device-width: 736px)
and (-webkit-min-device-pixel-ratio: 3)
and (orientation: portrait){
    right: 26%
}


@media only screen 
and (min-device-width: 414px)
and (max-device-width: 736px)
and (-webkit-min-device-pixel-ratio: 3)
and (orientation: landscape){
    right: 38%;
}



`;

export default StyledUnreadMessagesCounter;