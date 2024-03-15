
import { useState } from "react"
import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { ButtonAdd, ButtonCancell, ButtonCancellExams, ButtonSecondaryTitle, TittleCancellExams } from "../../components/button/Style"
import { Container, ContainerViewPrescription } from "../../components/container/Style"
import { InputProfile, InputPront, InputProntBig } from "../../components/input/Style"
import { ContainerScroll, ContainerScrollProfile, ScrollViewPrescription } from "../../components/scrollView/ScrollView"
import { Age, Email, TextInput, TextInputDesc, TextInputDiag, TextInputInsertImage, TextInputMed, Title } from "../../components/title/Style"
import { ImageExams, ImportImages, SendImage, ViewButtons } from "./Style"

export const ViewPrescription = ({ navigation, route }) => {

    const [cam, setCam] = useState(route.params == undefined ? false : true);

    return (

        <ContainerViewPrescription>

            <ProfileImagePront source={require("../../../assets/DoctorClaudio.png")} />

            <Title> Dr. Claúdio </Title>


            <Informations>
                <Age>19 anos</Age>
                <Email>joao.oliveiira.pda@gmail.com</Email>
            </Informations>


            <ScrollViewPrescription>
                <TextInputDesc>
                    Descrição da consulta
                </TextInputDesc>

                <InputProfile
                    placeholder='Descrição'
                />

                <TextInputDiag>
                    Diagnóstico do paciente
                </TextInputDiag>

                <InputProfile
                    placeholder="Diagnóstico"
                />

                <TextInputMed>
                    Prescrição médica
                </TextInputMed>
                <InputProntBig
                    placeholder="Prescrição médica"
                />
                <TextInputMed>
                    Exames Médicos
                </TextInputMed>
                <ImportImages>
                    <ImageExams source={require("../../../assets/InsertExams.png")} />
                </ImportImages >

                <ViewButtons>
                    <ButtonAdd onPress={() => navigation.navigate("CameraPage")}>
                        <SendImage source={require("../../../assets/Send.png")} />
                    </ButtonAdd>
                    <ButtonCancellExams>
                        <TittleCancellExams>Cancelar</TittleCancellExams>
                    </ButtonCancellExams>
                </ViewButtons>

            </ScrollViewPrescription>

            <ButtonCancell onPress={() => navigation.navigate("Home")}>
                <ButtonSecondaryTitle>
                    Voltar
                </ButtonSecondaryTitle>
            </ButtonCancell>

        </ContainerViewPrescription>
    )
}