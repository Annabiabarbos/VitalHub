import { ContainerScroll } from "../../components/scrollView/ScrollView"
import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { Button, ButtonCancell, ButtonEdit, ButtonEditMedRec, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../../components/button/Style"
import { Container } from "../../components/container/Style"
import { InputPront, InputProntBig, InputProntBigEdit, InputProntEdit } from "../../components/input/Style"
import { Age, Email, TextInputDesc, TextInputDiag, TextInputMed, Title } from "../../components/title/Style"


export const MedicalRecordEdit = ({navigation}) => {
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

                <InputProntBigEdit
                />

                <TextInputDiag>
                    Diagnóstico do paciente
                </TextInputDiag>

                <InputProntEdit
                />

                <TextInputMed>
                    Prescrição médica
                </TextInputMed>
                <InputProntBigEdit />

                <Button onPress={() => navigation.navigate("Home")}>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button onPress={() => navigation.navigate("MedicalRecord")}>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <ButtonCancell onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonCancell>
            </ContainerScroll>
        </Container>
    )
}