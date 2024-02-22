import {ButtonTabsStyle, ButtonTextStyle} from './style'

export const AbsListAppointament = ({textButton,clickButton=false, onPress}) => {
    return (
        // botao
        <ButtonTabsStyle
        clickButton={clickButton}
        onPress={onPress}
        >
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>

        </ButtonTabsStyle>
    )
}