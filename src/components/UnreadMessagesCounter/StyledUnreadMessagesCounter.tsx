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
and (min-device-width: 375px) 
and (max-device-width: 667px) 
and (-webkit-min-device-pixel-ratio: 2)
and (orientation: landscape) { 
  right: 37%;
}


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

@media only screen 
and (min-device-width: 375px)
and (max-device-width: 812px)
and (-webkit-min-device-pixel-ratio: 3)
and (orientation: portrait){
    right: 24%;
}

@media only screen
and (min-device-width: 375px);
and (max-device-width: 812px);
and (-webkit-min-device-pixel-ratio: 3)
and (orientation: landscape){
    right: 39%;
}

@media only screen
and (min-device-width: 768px);
and (max-device-width: 1024px);
and (-webkit-min-device-pixel-ratio: 1)
and (orientation: portrait){
    right: 38%;
}

@media only screen
and (min-device-width: 768px)
and (max-device-width: 1024px)
and (orientation: landscape)
and (-webkit-min-device-pixel-ratio: 1){
    right: 41%;
}

@media only screen
and(min-device-width: 768px)
and(max-device-width: 1024px)
and(orientation: portrait)
and(-wenkit-min-device-pixel-ratio: 2){
    right: 38%;
}


@media only screen
and (min-device-width: 768px)
and (max-device-width: 1024px)
and (orientation: landscape)
and (-webkit-min-device-pixel-ratio: 2){
    right: 41%
}

@media only screen
and (min-device-width: 1024px)
and (max-device-width: 1366px)
and (-webkit-min-device-pixel-ratio: 2){
    right: 41%
}

@media only screen
and (min-device-width: 1366px)
and (max-device-width: 1366px)
and (orientation: landscape)
and (-webkit-min-device-pixel-ratio: 2){
    right: 44%
}

@media only screen
and (min-device-width: 1200px)
and (max-device-width: 1600px)
and (-webkit-min-device-pixel-ratio: 1){
    right: 45%
}

@media only screen
and (min-device-width: 1200px)
and (max-device-width: 1600px)
and (min-resolution: 192dpi)
and (-webkit-min-device-pixel-ratio: 2){
    right: 45%
}


`;



export default StyledUnreadMessagesCounter;