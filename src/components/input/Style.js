
import { TextInput } from "react-native";
import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898f"
})`
width: 90%;
height: 53px;
padding: 16px;
margin-top : 15px;

border: 2px solid #49b3ba;
border-radius: 5px;
font-family: "MontserratAlternates_600SemiBold";
`
export const InputNumbers = styled(Input).attrs({
    
})`
width: 65px;
height: 62px;
margin-bottom: 30px;
font-size: 25px;
text-align: center;
`