import styled from "styled-components";

export const ProfileContainer = styled.SafeAreaView`
width: 100%;
height: 100%;
`

export const ProfileImage = styled.Image`
width: 100%;
height: 280px;
`

export const ProfileNameView = styled.View`
background-color: #fff;
width: 290px;
height: 100px;
align-self: center;
justify-content: center;
margin-top: -50px;
border-radius: 5px;
`
export const NameProfile = styled.Text`
font-size: 16px;
font-family: "MontserratAlternates_600SemiBold";
align-self: center;
justify-content: center;
color: #33303E;
`
export const EmailProfile = styled(NameProfile)`
margin-top: 5px;
font-size: 14px;
font-family: "Quicksand_500Medium";
color: #4E4B59;
`
export const TextsProfile = styled.Text`
font-family: "Quicksand_600SemiBold";
margin-left: 20px;
margin-top: 15px;
margin-bottom: 7px;
`
export const InputCep = styled.View`
margin-right: 20px;
`
export const InputCity = styled.View`
margin-left: 20px;
`
export const Address = styled.View`
flex-direction: row;
justify-content: start ;
`