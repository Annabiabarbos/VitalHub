import styled from "styled-components";
import { FilterAppointament } from "../home/style";
import { ButtonText, TextBold } from "../../components/appointmentCard/Style";
import { Button } from "../../components/button/Style";

export const FilterAppointamentClinic = styled.View`
`
export const ImageCard = styled.Image`
width: 70px;
height: 80px;
margin-right: 5px;
align-self: center;
`
export const DoctorCard = styled.View`
background-color: white;
shadowColor: 'black';
height: 100px;
width: 320px;
border-radius: 5px;
margin-bottom: 10px;
`
export const TitleCard = styled.Text`
font-family: "MontserratAlternates_600SemiBold";
font-size: 16px;
align-self: center;
margin-bottom: 50px;
margin-top:25px
`
export const FilterAppointamentDoctor = styled(FilterAppointament)`
`
export const TextArea = styled(TextBold)`
align-self: start;
margin-top: -40px;
margin-left: 80px;
`
export const ContCard = styled.View `
flex-direction: row;
`
export const TextButtonDoctor = styled(ButtonText)`
color: white 
`
export const ButtonChoiceDoctor = styled(Button)`
margin-left: 20px;
`