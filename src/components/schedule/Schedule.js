import { ButtonTabsStyleSchedule, ButtonTextStyleSchedule } from "./Style"

export const Schedule = ({textButton,clickButton=false, onPress}) => {
    return (
        // botao
        <ButtonTabsStyleSchedule
        clickButton={clickButton}
        onPress={onPress}
        >
            <ButtonTextStyleSchedule clickButton={clickButton}>{textButton}</ButtonTextStyleSchedule>

        </ButtonTabsStyleSchedule>
    )
}