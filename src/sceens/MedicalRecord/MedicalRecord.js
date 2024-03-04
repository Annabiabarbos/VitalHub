import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { Button, ButtonCancell, ButtonEditMedRec, ButtonSecondaryTitle, ButtonTitle } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { InputPront, InputProntBig } from "../../components/input/Style"
import { ContainerScroll } from "../../components/scrollView/ScrollView"
import { Age, Email, TextInputDesc, TextInputDiag, TextInputMed, Title } from "../../components/title/Style"

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
                <Button onPress={() => navigation.navigate("MedicalRecordEdit")}>
                    <ButtonTittle>Salvar</ButtonTittle>
                </Button>

                <ButtonEditMedRec>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonEditMedRec>

                <ButtonCancell onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonCancell>
            </ContainerScroll>
        </Container>
    )
}