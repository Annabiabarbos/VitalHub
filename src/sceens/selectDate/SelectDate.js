import { ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { TitleDate } from "../../components/title/Style"
import { ButtonChoiceDoctor, TitleCard } from "../choiceDoctor/Style"

export const SelectDate = ({navigation}) => {
    return (
        <Container>
            <TitleDate>Selecione a data</TitleDate>

            <ButtonChoiceDoctor onPress={() => navigation.navigate("SelectDate")}>
                <ButtonTittle>Continuar</ButtonTittle>
            </ButtonChoiceDoctor>

            <ButtonSecondary onPress={() => navigation.navigate("ChoiceDoctor")}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>

        </Container>
        )

}