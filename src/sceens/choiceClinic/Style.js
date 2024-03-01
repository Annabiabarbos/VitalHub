import styled from "styled-components";
import { Container } from "../../components/container/Style";

export const ContainerClinic = styled(Container)`
align-items: start;
`
export const HourClinic = styled.View`
width: 100px;
height: 25px;
background-color: #E8FCFD;
border-radius: 5px;
margin-left: 100px;
flex-direction: row;
align-self: center;
gap: 10px;
`
export const CalendarImage = styled.Image`
align-self: center;
width: 20px;
height: 20px;
`
export const TitleHour = styled.Text`
color: #49B3BA;
align-self: center;
font-size: 16px;
`
export const  ClassificationClinic = styled.View`
align-self: center;
margin-right: -200px;
flex-direction: row;
`
export const ImageClassification = styled.Image`
width: 20px;
height: 20px;
align-self: flex-end;

`
export const TitleClassification = styled.Text`
font-family: "Quicksand_600SemiBold";
color: #F9A620;
font-size: 16px;
`