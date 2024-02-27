import styled, { css } from "styled-components";
// componente de botao - ButtonTabsStyle

export const ButtonTabsStyleSchedule =styled.TouchableHighlight`
padding: 12px 14px;
border-radius: 5px;

${props => props.clickButton ? css`background-color:#60BFC5;` : 
css`background-color:transparent; border:2px solid #60BFC5;`}
`
export const ButtonTextStyleSchedule=styled.Text`
font-size: 12px;
font-family:'MontserratAlternates_600SemiBold';

${props => props.clickButton ? css`color:#fbfbfb`: css`color:#60BFC5`}
`