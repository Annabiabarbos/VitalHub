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
    display: flex;
    align-self: center;
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
export const TextButtonPront = styled.Text`
font-size: 14px;
font-family: "MontserratAlternates_700Bold";
text-transform: uppercase;
color: #fff;
`
export const ButtonEdit = styled(Button)`
background-color: #ACABB7;
margin-left: 10px;
border-color: transparent;
`

export const ButtonExit = styled(Button)`
width: 190px;
background-color: #ACABB7;
border-color: transparent;
display: flex;
align-self: center;
justify-content: center;
`
export const ButtonEditMedRec = styled(ButtonEdit)`
align-items: center;
margin-left: 0x;
`
export const ButtonEditProfile = styled(ButtonEdit)
``
export const ButtonCancell= styled(ButtonSecondary)`
margin-left: -35px;
`

export const ButtonAppointment = styled.TouchableOpacity`
width: 60px;
height: 60px;
background-color: #49B3BA;
border-radius: 7px;
margin-bottom: 50px;
align-self: flex-end;
margin-right: 20px;
`
export const ButtonSchedule = styled.TouchableOpacity`
border-color: #60BFC5;;
`
export const ButtonClinic =styled(Button)`
margin-left: 20px;
`
export const ButtonSecondaryModal = styled(ButtonSecondary)`
margin-top: -140px;
`