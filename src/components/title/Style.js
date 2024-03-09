import styled from "styled-components";
import { Text } from "../texts/Style";

export const Title = styled.Text`
font-size: 20px;
color: #33303E;
margin-bottom: 5px;
margin-top: 10px;
font-family: "MontserratAlternates_600SemiBold";
`
export const Age= styled.Text `
font-family: "Quicksand_500Medium";
font-size:14px;
margin-right: 15px;
color: #4E4B59;
`
export const Email = styled.Text`
font-family: "Quicksand_500Medium";
font-size:14px;
margin-right: 15px;
color: #4E4B59;
`
export const TextInput = styled(Text)`
font-size: 16px;
    font-family: 'Quicksand_600SemiBold';
    margin-top: 20px;
    color: #000000;
    align-items: start;
    align-self: flex-start;
    justify-content: start;
    margin-bottom: -10px;
`


export const TextInputDesc = styled(Text)`
margin-left: -80px;
margin-bottom: -10px;
`
export const TextInputDiag = styled(Text)`
margin-left: -70px;
margin-bottom: -10px;
`

export const TextInputMed = styled(Text)`
margin-left: -90px;
margin-bottom: -10px;
`
export const TitleModal = styled(Title)`
margin-top: 30px;
`

export const TextInputModal = styled(TextInput)`
margin-left: -20px;
`
export const TextInputInsertImage = styled(TextInputMed)`
font-family: "MontserratAlternates_500Medium";
color: #4E4B59;
font-size: 14px;
`

export const TitleClinic = styled(Title)`
align-self: center;
margin-top: 10px;
`

export const TextModalConfirmation = styled(TextInputModal)`
margin-left: -50px;
`

export const Informationsmodal = styled.Text`    
font-family: "Quicksand_500Medium";
font-size: 14px;
margin-top: 7px ;
margin-right: 100px;
color: #4E4B59;
`