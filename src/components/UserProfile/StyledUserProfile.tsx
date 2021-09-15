import styled from "../../theme";

const StyledUserProfile = styled("div")`
padding: 14px;
text-align: left;

label{
    font-size: 1.2em;
}

input{
    color: ${props => props.theme.primaryDarkColor};
    width: 100%;
    line-height;
    margin-top: 7px;
    box-sizing: border-box;
    padding: 6px;
}
`;

export default StyledUserProfile;