import { ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { Container } from "../../components/container/Style"
import { InputProntEdit } from "../../components/input/Style"
import { Text, TextMaps } from "../../components/texts/Style"
import { TextInputModal, Title } from "../../components/title/Style"
import { ImageMaps, InputMaps, InputMapsMini, ViewMaps, ViewNumber } from "./Style"

export const Maps = ({ navigation }) => {
    return (

        <Container>
            <ImageMaps source={require("../../../assets/maps.png")} />
            <Title>Clinica Natureh</Title>
            <TextMaps>São Paulo, SP</TextMaps>
            <TextInputModal>Endereço</TextInputModal>
            <InputMaps />

            <ViewMaps>
                <ViewNumber>
                    <TextInputModal>Número</TextInputModal>
                    <InputMapsMini />
                </ViewNumber>

                <ViewNumber>
                    <TextInputModal>Bairro</TextInputModal>
                    <InputMapsMini />
                </ViewNumber>


            </ViewMaps>

            <ButtonSecondary onPress={() => navigation.replace("Main")}>
                <ButtonSecondaryTitle>
                    Voltar
                </ButtonSecondaryTitle>
            </ButtonSecondary>
        </Container>

    )
}