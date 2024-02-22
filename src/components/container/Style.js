import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
    font-family: "MontserratAlternates_500Medium";
`
export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#60BFC5", "#496BBA"],
    start: { x: -0.05, y: 1.08 },
    end: { x: 1, y: 0 },
    
  })`
    width: 100%;
    padding: 20px;
    padding-bottom: 22px;
  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 4px 15px #00000014;
  `;

