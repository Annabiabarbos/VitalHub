import { ApiMap } from "../../components/apiMap/ApiMap"
import { ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { Container } from "../../components/container/Style"
import { TextMaps } from "../../components/texts/Style"
import { TextInputModal, Title, ViewInput } from "../../components/title/Style"
import { InputMaps, InputMapsMini, InputMapsNumber, ViewMap, ViewMaps, ViewNumber } from "./Style"

export const Maps = ({ navigation }) => {
    return (

        <Container>
            <ViewMap>
                <ApiMap />
            </ViewMap>
            {/* <ImageMaps source={require("../../../assets/maps.png")} /> */}

            <Title>Clinica Natureh</Title>
            <TextMaps>São Paulo, SP</TextMaps>
            <TextInputModal>Endereço</TextInputModal>
            <InputMaps />

            <ViewMaps>
                
                <ViewNumber>
                    <TextInputModal>Número</TextInputModal>
                    <InputMapsNumber />
                </ViewNumber>

               
                    <ViewInput>
                        <TextInputModal>Bairro</TextInputModal>
                        <InputMapsMini />
                    </ViewInput>
               


            </ViewMaps>

            <ButtonSecondary onPress={() => navigation.replace("Main")}>
                <ButtonSecondaryTitle>
                    Voltar
                </ButtonSecondaryTitle>
            </ButtonSecondary>
        </Container>

    )
}