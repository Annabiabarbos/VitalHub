import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { Button, ButtonCancell, ButtonPrescription, ButtonPrescriptionTittle, ButtonSecondaryTitle, ButtonTitle } from "../../components/button/Style"
import { Container } from "../../components/container/Style"
import { InputProntBigEdit, InputProntEdit } from "../../components/input/Style"
import { ContainerScroll } from "../../components/scrollView/ScrollView"
import { TextsPrescription } from "../../components/texts/Style"
import { Age, Email, TextInputDesc, TextInputDiag, TextInputMed, Title } from "../../components/title/Style"
import { IconPrescption, PrescriptionsInformations, ViewPresc, ViewPrescrption } from "./Style"


export const Prescription = () => {
    return (
        <Container>

            <ProfileImagePront source={require("../../../assets/DoctorClaudio.png")} />

            <Title> Dr. Claudio </Title>


            <Informations>
                <Age>Cliníco geral</Age>
                <Email>CRM-15286</Email>
            </Informations>

            <ContainerScroll>
                <TextInputDesc>
                    Descrição da consulta
                </TextInputDesc>

                {/* <InputProntBigEdit /> */}
                <PrescriptionsInformations />

                <TextInputDiag>
                    Diagnóstico do paciente
                </TextInputDiag>

                {/* <InputProntEdit/> */}
                <PrescriptionsInformations />

                <TextInputMed>
                    Prescrição médica
                </TextInputMed>
                {/* <InputProntBigEdit /> */}
                <PrescriptionsInformations />

                <TextInputMed>
                    Exames Médicos
                </TextInputMed>

                {/* <InputProntBigEdit //</ContainerScroll>placeholder='nenhuma foto informada'
                >

                    
                </InputProntBigEdit> */}
                <PrescriptionsInformations>
                    <ViewPrescrption>
                        <IconPrescption source={require("../../../assets/IconPrecription.png")} />
                    <TextsPrescription>Nenhuma foto inserida</TextsPrescription>
                    </ViewPrescrption>
                    
                </PrescriptionsInformations>

                <ButtonPrescription>
                    <ButtonPrescriptionTittle>Enviar</ButtonPrescriptionTittle>
                </ButtonPrescription>



                <ButtonCancell onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>
                        Voltar
                    </ButtonSecondaryTitle>
                </ButtonCancell>
            </ContainerScroll>
        </Container>
    )
}