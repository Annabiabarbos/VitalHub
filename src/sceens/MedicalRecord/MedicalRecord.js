
import { ScrollView } from "react-native"
import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../../components/button/Style"
import { Container } from "../../components/container/Style"
import { InputPront, InputProntBig } from "../../components/input/Style"
import { Age, Email, TextInput, TextInputDesc, TextInputDiag, TextInputMed, Title } from "../../components/title/Style"
import { ContainerScroll, ContainerScrollProfile, ScrollViewMedRec } from "../../components/ScrollView/ScrollView"
import { ViewInput, ViewMedRec } from "./Style"


export const MedicalRecord = ({ navigation }) => {
    return (
        <Container>

            <ProfileImagePront source={{ uri: "https://github.com/ojuaum1.png" }} />

            <Title> João Oliveira </Title>


            <Informations>
                <Age>19 anos</Age>
                <Email>joao.oliveiira.pda@gmail.com</Email>
            </Informations>

            <ContainerScroll>
                <TextInputDesc>
                    Descrição da consulta
                </TextInputDesc>

                <InputProntBig
                    placeholder='Descrição'
                />

                <TextInputDiag>
                    Diagnóstico do paciente
                </TextInputDiag>

                <InputPront
                    placeholder="Diagnóstico"
                />

                <TextInputMed>
                    Prescrição médica
                </TextInputMed>
                <InputProntBig
                    placeholder="Prescrição médica"
                />
                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <ButtonSecondary onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonSecondary>
            </ContainerScroll>
        </Container>
    )
}