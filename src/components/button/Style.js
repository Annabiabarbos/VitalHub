import styled from "styled-components";

export const Button = styled.TouchableOpacity`
width: 90%;
height: 44px;
background-color: #496BBA;
justify-content: center;
align-items: center;
margin-top: 15px;
border-radius: 5px;
padding: 12px 8px 12px 8px;
border: #496bba;
`
export const ButtonGoogle = styled(Button)`
background-color: #FAFAFA;
border-color: #496BBA;
flex-direction: row;
gap: 15px;
`

export const ButtonNewPws = styled(Button)`
margin-top: 30px;
`

export const buttonModal = styled(Button)`
width: 80%;
`
export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
`


export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

export const ButtonSecondaryTitle = styled(ButtonTitle)`
text-transform: capitalize;
text-decoration: underline;
color: #344f8f;
`
export const ButtonProfile = styled(Button)`
margin-left: 10px;
`