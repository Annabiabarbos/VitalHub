import { Container } from "../../components/container/Style"
import { InputProntEdit } from "../../components/input/Style"
import { Text, TextMaps } from "../../components/texts/Style"
import { TextInputModal, Title } from "../../components/title/Style"
import { InputMaps, InputMapsMini, ViewMaps, ViewNumber } from "./Style"

export const Maps = () => {
    return (

        <Container>
            <Title>Clinica Natureh</Title>
            <TextMaps>São Paulo, SP</TextMaps>
            <TextInputModal>Endereço</TextInputModal>
            <InputMaps />

            <ViewMaps>
                <ViewNumber>
                    <TextInputModal>Número</TextInputModal>
                    <InputMapsMini />
                </ViewNumber>

                <TextInputModal>Bairro</TextInputModal>
                <InputMapsMini />
            </ViewMaps>
        </Container>

    )
}